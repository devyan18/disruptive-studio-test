import axios from "axios";
import { User } from "@/model/User";
import { SERVER_HOST } from "@/utilities/constants";

type AuthResponseData = {
  token: string;
  data: User
}

export const loginService = async (email: string, password: string) => {
  const { data } = await axios.post<AuthResponseData>(`${SERVER_HOST}/auth/login`, { email, password });
  return data;
};

type SignUpUserDataType = {
  username: string;
  email: string;
  password: string;
  role: string;
}

export const signUpService = async (user: SignUpUserDataType) => {
  const { data } = await axios.post<AuthResponseData>(`${SERVER_HOST}/auth/register`, user);
  return data;
};
