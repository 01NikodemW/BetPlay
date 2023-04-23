using BetPlay.Dto.League;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Countries;
using BetPlay.Responses.Countries;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Countries;

public class GetCountriesRequestHandler : IRequestHandler<GetCountriesRequest, GetCountriesResponse>
{
    private readonly ICountryRepository _countryRepository;

    public GetCountriesRequestHandler(ICountryRepository countryRepository)
    {
        _countryRepository = countryRepository;
    }

    public async Task<GetCountriesResponse> Handle(GetCountriesRequest request, CancellationToken cancellationToken)
    {
        var countries = await _countryRepository.GetCountries();

        return new GetCountriesResponse
        {
            Countries = countries.Adapt<IEnumerable<CountryDto>>().ToList()
        };
    }
}