namespace BetPlay.ApiSport.Dto.Bet;

public class BetResponseApiDto
{
    public League League { get; set; } = default!;
    public Fixture Fixture { get; set; } = default!;
    public DateTime Update { get; set; } = default!;
    public List<Bookmaker> Bookmakers { get; set; } = default!;
}

public class League
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Country { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public string Flag { get; set; } = default!;
    public int Season { get; set; }
}

public class Fixture
{
    public int Id { get; set; }
    public string Timezone { get; set; } = default!;
    public DateTime Date { get; set; }
    public long Timestamp { get; set; }
}

public class Bookmaker
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public IEnumerable<Bet> Bets { get; set; } = default!;

    public class Bet
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public IEnumerable<BetValue> Values { get; set; } = default!;

        public class BetValue
        {
            public object Value { get; set; } = default!;
            public string Odd { get; set; } = default!;
        }
    }
}