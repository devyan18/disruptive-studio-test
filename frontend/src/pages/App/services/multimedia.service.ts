import { SERVER_HOST } from "@/utilities/constants";
import axios from "axios";

// type formType = {
//   title: string;
//   thematic: string;

//   image?: File;
//   files?: File;
//   text?: string;
//   url?: string;
// }

export const createMultimedia = async (
  formData: FormData,
  token: string,
  files: boolean
) => {
  console.log(formData);
  console.log("files is", files);
  try {
    const usingImage = formData.get("image");
    const usingFiles = formData.get("files");

    if (files && usingImage) {
      // upload image
      const newFormData = new FormData();

      newFormData.append("file", formData.get("image") as Blob);

      const response = await axios.post<{data: string}>(`${SERVER_HOST}/upload`, newFormData, {
        headers: {
          Authorization: token
        }
      });

      formData.append("image", response.data.data);
    }

    if (files && usingFiles) {
      // upload files
      const newFormData = new FormData();

      newFormData.append("file", formData.get("files") as Blob);

      const response = await axios.post<{data: string}>(`${SERVER_HOST}/upload`, newFormData, {
        headers: {
          Authorization: token
        }
      });

      formData.append("files", response.data.data);
    }

    const response = await axios.post(`${SERVER_HOST}/multimedia`, formData, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json"
      }
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
