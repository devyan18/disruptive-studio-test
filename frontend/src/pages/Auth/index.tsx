import { lazy } from "react";

export { default as AuthPage } from "./components/AuthPage";

export const LoginPage = lazy(() => import("./components/LoginPage"));
export const SignUpPage = lazy(() => import("./components/SignUpPage"));
