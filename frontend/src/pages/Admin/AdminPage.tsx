import { useNavigate } from "react-router-dom";
import styles from "./AdminPage.module.css";
import { CreateCategory } from "./components";
import { CreateThematic } from "./components/CreateThematic";

export default function AdminPage () {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <main>
        <h1>AdminPage</h1>
        <p>This is the Admin page.</p>
        <div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >Go to App</button>
        </div>

        <div>
          <CreateThematic />

          <CreateCategory />
        </div>

      </main>
    </div>
  );
}
