import styles from "./AdminPage.module.css";
import { CreateThematic } from "./components/CreateThematic";

export default function AdminPage () {
  return (
    <div className={styles.container}>
      <main>
        <h1>AdminPage</h1>
        <p>This is the Admin page.</p>
        <CreateThematic />
      </main>
    </div>
  );
}
