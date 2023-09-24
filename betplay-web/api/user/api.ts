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

export async function createUser(token: string) {
  const response = await axiosInstance.post(
    "/Account/CreateUser",
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
