import { Thematic } from "@/model/Thematic";
import { SERVER_HOST } from "@/utilities/constants";
import axios from "axios";

type ResponseCreateThematic = {
  data: Thematic
}

export const createThematic = async (form: Partial<Thematic>, token: string) => {
  const response = await axios.post<ResponseCreateThematic>(`${SERVER_HOST}/temathic`, form, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json"
    }
  });

  return response.data;
};
