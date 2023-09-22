import { CreateBettingSlipRequest } from "@/types/api/bets/create-betting-slip-request";
import { axiosInstance, getJWTHeader } from "../axios-instance";
import { GetBetsByFixtureIdRequest } from "@/types/api/bets/get-bets-by-fixture-id-request";

export async function createBettingSlip(data: CreateBettingSlipRequest) {
  const response = await axiosInstance.post("/Bets/CreateBettingSlip", data, {
    headers: {
      "Content-Type": "application/json",
      ...getJWTHeader(),
    },
  });

  return response.data;
}

export async function getBetsByFixtureId(data: GetBetsByFixtureIdRequest) {
  const response = await axiosInstance.post("/Bets/GetBetsByFixtureId", data, {
    headers: {
      "Content-Type": "application/json",
      ...getJWTHeader(),
    },
  });

  return response.data;
}
