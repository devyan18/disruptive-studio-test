import styles from "./AdminPage.module.css";
import { CreateTemathic } from "./components/CreateTemathic/CreateTemathic";

export default function AdminPage () {
  return (
    <div className={styles.container}>
      <main>
        <h1>AdminPage</h1>
        <p>This is the Admin page.</p>
        <CreateTemathic />
      </main>
    </div>
  );
}
