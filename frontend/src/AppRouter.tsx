import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "@/common/components";

import { AdminPage, AuthPage, LandingPage, LoginPage, SignUpPage } from "@/pages";

// Router component that defines the routes of the application
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          {/* Private Routes */}
          <Route path='/admin' element={<PrivateRoutes roles={["Admin"]}/>}>
            <Route index element={<AdminPage />} />
          </Route>
          <Route path='/creator' element={<PrivateRoutes roles={["Admin", "Creator"]}/>}>
          </Route>
          <Route path='/app' element={<PrivateRoutes roles={["Admin", "Creator", "Reader"]}/>}>

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
