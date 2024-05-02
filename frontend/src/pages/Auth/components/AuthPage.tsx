import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function AuthPage () {
  return (
    <Suspense fallback={
      <div>
        <h1>Loading...</h1>
      </div>
    }>
      <Outlet />
    </Suspense>
  );
}
