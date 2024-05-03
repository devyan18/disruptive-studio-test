import { SERVER_ASSETS } from "@/utilities/constants";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { useState } from "react";

type Props = {
  fileName: string;
}

function ViewPDFModal (props: Props) {
  const [pdfUrl, setPdfUrl] = useState("");

  const handleOpenPdf = async () => {
    const token = getTokenFromLocalStorage()!;

    try {
      const response = await fetch(`${SERVER_ASSETS}/${props.fileName}`, {
        method: "GET",
        headers: {
          Authorization: token
        }
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      } else {
        throw new Error("Respuesta de red no fue ok.");
      }
    } catch (error) {
      console.error("Error al mostrar el archivo PDF:", error);
    }
  };

  return (
    <div>
      <button onClick={handleOpenPdf}>Abrir PDF</button>
      {pdfUrl && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "#000", zIndex: 1000 }}>
          <iframe src={pdfUrl} style={{ margin: "0 auto", width: "100%", height: "100%" }} ></iframe>
          <button onClick={() => setPdfUrl("")} style={{ zIndex: 1001, position: "absolute", top: 10, right: 100 }}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ViewPDFModal;
