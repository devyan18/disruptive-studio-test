import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "@/common/components";

import {
  AdminPage,
  AppPage,
  AuthPage,
  LandingPage,
  LoginPage,
  SignUpPage
} from "@/pages";
import { Suspense } from "react";
import CreatorPage from "./pages/Creator/CreatorPage";

// Router component that defines the routes of the application
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Private Routes */}
        <Route path="/admin" element={<PrivateRoutes roles={["Admin"]} />}>
          <Route index element={<AdminPage />} />
        </Route>
        <Route
          path="/creator"
          element={<PrivateRoutes roles={["Admin", "Creator"]} />}
        >
          <Route path="upload" element={<CreatorPage />} />
        </Route>
        <Route path="/app" element={ <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
          </Suspense>}>
          <Route index element={<AppPage/>} />
        </Route>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthPage />}>
          <Route index element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
