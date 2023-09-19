import { GetFixturesByDateAndLeagueIdsRequestData } from "@/types/api/fixtures/GetFixturesByDateAndLeagueIdsRequestData";
import { axiosInstance } from "../axios-instance";

export async function getFixturesByDateAndLeagueIds(
  date: GetFixturesByDateAndLeagueIdsRequestData
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
