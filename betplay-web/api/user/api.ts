import { axiosInstance, getJWTHeader } from "../axios-instance";

export async function getUserData() {
  const response = await axiosInstance.post(
    "/Account/GetUserData",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        ...getJWTHeader(),
      },
    }
  );

  return response.data;
}
