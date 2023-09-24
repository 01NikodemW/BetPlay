import { GetFixturesByDateAndLeagueIdsRequest } from "@/types/api/fixtures/get-fixtures-by-date-and-league-ids-request";
import { axiosInstance } from "../axios-instance";
import { GetLiveFixturesByLeagueIdsRequest } from "@/types/api/fixtures/get-live-fixtures-by-league-ids-request";

export async function getFixturesByDateAndLeagueIds(
  date: GetFixturesByDateAndLeagueIdsRequest
) {
  const response = await axiosInstance.post(
    "/Fixtures/GetFixturesByDate",
    date,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export async function getFixturesById(fixtureId: number) {
  const response = await axiosInstance.post(
    "/Fixtures/GetFixtureById",
    {
      fixtureId: fixtureId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.fixture;
}

export async function getLiveFixturesByLeagueIds(
  date: GetLiveFixturesByLeagueIdsRequest
) {
  const response = await axiosInstance.post(
    "/Fixtures/GetLiveFixturesByLeagueIds",
    date,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}
