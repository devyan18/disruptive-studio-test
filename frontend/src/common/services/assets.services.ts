import { SERVER_ASSETS } from "@/utilities/constants";

export const handleDownloadPDF = async (file: string, token: string, downloadName: string) => {
  try {
    const response = await fetch(`${SERVER_ASSETS}/${file}`, {
      method: "GET",
      headers: {
        Authorization: token
      }
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } else {
      throw new Error("Respuesta de red no fue ok.");
    }
  } catch (error) {
    console.error("Error en la descarga del archivo:", error);
  }
};
