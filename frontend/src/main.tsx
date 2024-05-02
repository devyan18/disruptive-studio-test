import ReactDOM from "react-dom/client";
import "./index.css";

import { AppRouter } from "./AppRouter.tsx";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);
