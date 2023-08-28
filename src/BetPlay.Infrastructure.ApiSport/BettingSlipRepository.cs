using System.Globalization;
using System.Security.Claims;
using System.Text.RegularExpressions;
using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Domain;
using BetPlay.Dto.Bets;
using BetPlay.Infrastructure.EfCore;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class BettingSlipRepository : IBettingSlipRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IFixtureRepository _fixtureRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public BettingSlipRepository(BetPlayDbContext context, IFixtureRepository fixtureRepository
        , IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _fixtureRepository = fixtureRepository;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task CreateBettingSlip(IEnumerable<CreateBet> bets)
    {
        var userAuth0Id = _httpContextAccessor.HttpContext?.User.Claims
            .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Auth0Id == userAuth0Id);
        if (user == null)
            throw new InvalidOperationException("User not found.");


        var betsToCreate = bets.Select(bet => new Bet(bet)).ToList();

        _context.Bets.AddRange(betsToCreate);
        await _context.SaveChangesAsync();
        var bettingSlip = new BettingSlip
        {
            TotalStake = 10,
            TotalOdds = betsToCreate.Aggregate(1f, (acc, bet) => acc * bet.Odd),
            Status = BettingSlipStatus.Pending,
            Date = DateTime.Now,
            User = user
        };

        foreach (var bet in betsToCreate)
        {
            bettingSlip.Bets.Add(new BettingSlipBet { Bet = bet });
        }

        _context.BettingSlips.Add(bettingSlip);
        await _context.SaveChangesAsync();
    }


    public async Task VerifyBettingSlip(Guid id)
    {
        var bettingSlip = await _context.BettingSlips.FindAsync(id);
        if (bettingSlip == null)
            throw new InvalidOperationException("Betting slip not found.");

        if (bettingSlip.Status != BettingSlipStatus.Pending)
        {
            return;
        }

        var bets = await _context.BettingSlips.Where(x => x.Id == id)
            .SelectMany(x => x.Bets).Select(x => x.Bet).ToListAsync();
        var fixtures = new List<FixtureResponseApiDto>();
        foreach (var bet in bets)
        {
            if (bet.Status == BetStatus.Pending)
            {
                await VerifyBet(bet, fixtures);
            }
        }

        if (bets.All(x => x.Status == BetStatus.Won))
        {
            bettingSlip.Status = BettingSlipStatus.Won;
        }
        else if (bets.Any(x => x.Status == BetStatus.Lost))
        {
            bettingSlip.Status = BettingSlipStatus.Lost;
        }
        else
        {
            bettingSlip.Status = BettingSlipStatus.Pending;
        }

        _context.BettingSlips.Update(bettingSlip);
        await _context.SaveChangesAsync();

        throw new NotImplementedException();
    }


    private async Task VerifyBet(Bet bet, List<FixtureResponseApiDto> fixtures)
    {
        if (fixtures.All(x => x.Fixture.Id != bet.FixtureId))
            fixtures.Add(await _fixtureRepository.GetFixtureById(bet.FixtureId));
        var fixture = fixtures.First(x => x.Fixture.Id == bet.FixtureId);
        if (CheckFixtureStatus(fixture))
        {
            switch (bet.Name)
            {
                case "Match Winner":
                    VerifyMatchWinner(fixture, bet);
                    break;
                case "Exact Score":
                    VerifyExactScore(fixture, bet);
                    break;
                case "Clean Sheet - Home":
                    VerifyCleanSheetHome(fixture, bet);
                    break;
                case "Clean Sheet - Away":
                    VerifyCleanSheetAway(fixture, bet);
                    break;
                case "Both Teams Score":
                    VerifyBothTeamsScore(fixture, bet);
                    break;
                case "Goals Over/Under":
                    VerifyGoalsOverUnder(fixture, bet);
                    break;
            }
        }
        else
        {
            bet.Status = BetStatus.Pending;
        }

        _context.Bets.Update(bet);
        await _context.SaveChangesAsync();
    }


    private void VerifyMatchWinner(FixtureResponseApiDto fixture, Bet bet)
    {
        switch (bet.Value)
        {
            case "Home":
                bet.Status = fixture.Goals.Home > fixture.Goals.Away ? BetStatus.Won : BetStatus.Lost;
                break;
            case "Away":
                bet.Status = fixture.Goals.Away > fixture.Goals.Home ? BetStatus.Won : BetStatus.Lost;
                break;
            case "Draw":
                bet.Status = fixture.Goals.Away == fixture.Goals.Home ? BetStatus.Won : BetStatus.Lost;
                break;
        }
    }

    private void VerifyExactScore(FixtureResponseApiDto fixture, Bet bet)
    {
        var scores = bet.Value.Split(':');
        if (scores.Length != 2)
        {
            throw new InvalidOperationException("Invalid bet value format. Expected format: homeGoal:awayGoals.");
        }

        if (!int.TryParse(scores[0], out var expectedHomeGoal) ||
            !int.TryParse(scores[1], out var expectedAwayGoal))
        {
            throw new InvalidOperationException(
                "Invalid bet value format. Expected format: homeGoal:awayGoals with valid integers.");
        }

        if (fixture.Goals.Home == expectedHomeGoal && fixture.Goals.Away == expectedAwayGoal)
        {
            bet.Status = BetStatus.Won;
        }
        else
        {
            bet.Status = BetStatus.Lost;
        }
    }

    private void VerifyCleanSheetHome(FixtureResponseApiDto fixture, Bet bet)
    {
        if (bet.Value == "Yes")
        {
            bet.Status = fixture.Goals.Away == 0 ? BetStatus.Won : BetStatus.Lost;
        }
        else
        {
            bet.Status = fixture.Goals.Away == 0 ? BetStatus.Lost : BetStatus.Won;
        }
    }

    private void VerifyCleanSheetAway(FixtureResponseApiDto fixture, Bet bet)
    {
        if (bet.Value == "Yes")
        {
            bet.Status = fixture.Goals.Home == 0 ? BetStatus.Won : BetStatus.Lost;
        }
        else
        {
            bet.Status = fixture.Goals.Home == 0 ? BetStatus.Lost : BetStatus.Won;
        }
    }

    private void VerifyBothTeamsScore(FixtureResponseApiDto fixture, Bet bet)
    {
        if (bet.Value == "Yes")
        {
            bet.Status = fixture.Goals.Home != 0 && fixture.Goals.Away != 0 ? BetStatus.Won : BetStatus.Lost;
        }
        else
        {
            bet.Status = fixture.Goals.Home == 0 || fixture.Goals.Away == 0 ? BetStatus.Won : BetStatus.Lost;
        }
    }

    private void VerifyGoalsOverUnder(FixtureResponseApiDto fixture, Bet bet)
    {
        var match = Regex.Match(bet.Value, @"(Over|Under) (\d+(\.\d+)?)");

        if (!match.Success)
        {
            throw new InvalidOperationException("Invalid bet value format.");
        }

        var overOrUnder = match.Groups[1].Value;
        var threshold = float.Parse(match.Groups[2].Value, CultureInfo.InvariantCulture);


        var totalGoals = (float)((fixture.Goals.Home ?? 0) + (fixture.Goals.Away ?? 0));


        if (overOrUnder == "Over")
        {
            bet.Status = totalGoals > threshold ? BetStatus.Won : BetStatus.Lost;
        }
        else
        {
            bet.Status = totalGoals < threshold ? BetStatus.Won : BetStatus.Lost;
        }
    }

    private bool CheckFixtureStatus(FixtureResponseApiDto fixture)
    {
        return fixture.Fixture.Status.Short is "FT" or "AET" or "PEN";
    }
}