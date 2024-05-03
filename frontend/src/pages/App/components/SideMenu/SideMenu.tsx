import { Link } from "react-router-dom";
import styles from "./SideMenu.module.css";
import { useSession } from "@/context/auth/AuthProvider";

export default function SideMenu () {
  const { user } = useSession();

  return (
    <aside className={styles.SideMenuContainer}>
      <nav className={styles.manu}>
        <ul>
          <li>
            <Link to="/app">Home</Link>
          </li>
          <li>
            <Link to="/auth">Auth</Link>
          </li>
          {user
            ? <li><Link to="/admin">Admin</Link></li>
            : <li><Link to="/auth">Login</Link></li>
          }
        </ul>
      </nav>
    </aside>
  );
}
