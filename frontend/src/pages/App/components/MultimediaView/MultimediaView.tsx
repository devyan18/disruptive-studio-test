import { useThematic } from "@/context/view/ThematicProvider";
import styles from "./MultimediaView.module.css";
import { Image } from "@/common/components";

export default function MultimediaView () {
  const { multimedia } = useThematic();

  return (
    <div className={styles.MultimediaViewContainer}>
      {
        multimedia.map((m) => (
          <div key={m.id} className={styles.MultimediaViewCard}>
            <Image src={m.image ?? ""} alt={m.title} width={300}/>
            <div>
              <h1>{m.title}</h1>
              <p>{m.text}</p>
              <a href={m.url} target="_blank" rel="noreferrer">Go to multimedia</a>
            </div>
          </div>
        ))
      }
    </div>
  );
}
