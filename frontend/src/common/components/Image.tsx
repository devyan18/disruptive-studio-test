import { SERVER_ASSETS } from "@/utilities/constants";
import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  // image props
  width?: number;
  height?: number;
  className?: string;

  // image events
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
}

export default function Image (props: Props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const token = getTokenFromLocalStorage()!;
    fetch(`${SERVER_ASSETS}/${props.src}`, {
      headers: {
        Authorization: token
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      })
      .catch(error => console.error("Error al cargar la imagen:", error));
  }, [props.src]);

  return (
    <img {...props} src={imageUrl} />
  );
}
