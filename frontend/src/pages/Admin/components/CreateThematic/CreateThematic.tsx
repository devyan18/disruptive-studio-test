import { getTokenFromLocalStorage } from "@/utilities/localstorage";
import { createThematic } from "../../services/temathic.service";
import styles from "./CreateThematic.module.css";
import type { FormEvent } from "react";

export const CreateThematic = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const token = getTokenFromLocalStorage()!;

    const temathic = formData.get("temathic");
    const usingImage = !!formData.get("usingImage");
    const usingFiles = !!formData.get("usingFiles");
    const usingText = !!formData.get("usingText");
    const usingUrl = !!formData.get("usingUrl");

    if (!temathic) {
      return;
    }

    const data = {
      temathic: temathic as string,
      usingImage,
      usingFiles,
      usingText,
      usingUrl
    };

    createThematic(data, token).then((response) => {
      console.log(response);
    });
  };

  return (
    <form className={styles.createThematicContainer} onSubmit={handleSubmit}>
      <h2>Create New Temathic</h2>
      <div className={styles.inputLabel}>
        <label htmlFor="temathic">Thematic:</label>
        <input type="text" id="temathic" name="temathic" placeholder="Basketball" />
      </div>
      <div className={styles.inputLabel}>
        <label htmlFor="usingImage">Using Image:</label>
        <input type="checkbox" id="usingImage" name="usingImage" />
      </div>
      <div className={styles.inputLabel}>
        <label htmlFor="usingFiles">Using Files:</label>
        <input type="checkbox" id="usingFiles" name="usingFiles" />
      </div>
      <div className={styles.inputLabel}>
        <label htmlFor="usingText">Using Text:</label>
        <input type="checkbox" id="usingText" name="usingText" />
      </div>
      <div className={styles.inputLabel}>
        <label htmlFor="usingUrl">Using Url:</label>
        <input type="checkbox" id="usingUrl" name="usingUrl" />
      </div>
      <button type="submit">Create Thematic</button>
    </form>
  );
};
