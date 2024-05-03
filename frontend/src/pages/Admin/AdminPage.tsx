import styles from "./AdminPage.module.css";
import { CreateCategory } from "./components/CreateCategory";

export default function AdminPage () {
  return (
    <div className={styles.container}>
      <main>
        <h1>AdminPage</h1>
        <p>This is the Admin page.</p>
        <CreateCategory />
      </main>
    </div>
  );
}

// public name: string,
// public description: string,
// public coverImage: string
