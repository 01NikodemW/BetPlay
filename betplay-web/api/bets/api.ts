import { CreateBettingSlipRequest } from "@/types/api/bets/create-betting-slip-request";
import { axiosInstance, getJWTHeader } from "../axios-instance";

export async function createBettingSlip(data: CreateBettingSlipRequest) {
  console.log("here")
  const response = await axiosInstance.post("/Bets/CreateBettingSlip", data, {
    headers: {
      "Content-Type": "application/json",
      ...getJWTHeader(),
    },
  });

  return response.data;
}
