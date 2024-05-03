import { Temathic } from "@/model/Temathic";
import { SERVER_HOST } from "@/utilities/constants";
import axios from "axios";

type ResponseCreateTemathic = {
  data: Temathic
}

export const createTemathic = async (form: Partial<Temathic>, token: string) => {
  const response = await axios.post<ResponseCreateTemathic>(`${SERVER_HOST}/temathic`, form, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  });

  return response.data;
};
