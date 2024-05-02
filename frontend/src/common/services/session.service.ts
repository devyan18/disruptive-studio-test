import { User } from "@/model/User";
import { SERVER_HOST } from "@/utilities/constants";
import axios from "axios";

export const getUserFromToken = async (token: string) => {
  const response = await axios.get<{
    data: User
  }>(`${SERVER_HOST}/auth/me`, {
    headers: {
      Authorization: token
    }
  });

  return response.data;
};
