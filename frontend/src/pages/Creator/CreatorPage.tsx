import { useNavigate } from "react-router-dom";
import { CreateMultimedia } from "../App/components/CreateMultimedia";

import styles from "./CreatorPage.module.css";

export default function CreatorPage () {
  const navigate = useNavigate();

  return (
    <div className={styles.CreatorPageContainer}>
      <h1>Creator Page</h1>
      <p>
        This is a page for creators.
      </p>
      <button
        className={styles.BackButton}
        onClick={() => navigate("/app")}
      >Back to app</button>

      <CreateMultimedia />
    </div>
  );
}
