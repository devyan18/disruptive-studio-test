import { Category } from "@/model/Category";
import { SERVER_HOST } from "@/utilities/constants";
import axios from "axios";

type ReponseCreateCategory = {
  data: Category
}

export const createNewCategory = async (form: FormData, token: string) => {
  const response = await axios.post<ReponseCreateCategory>(`${SERVER_HOST}/category`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token
    }
  });

  return response.data;
};

export const getAllCategories = async () => {
  const response = await axios.get<Category[]>(`${SERVER_HOST}/category`);
  return response.data;
};
