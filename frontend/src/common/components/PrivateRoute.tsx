import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "@/context/auth/AuthProvider";
import { ROLES } from "@/model/User";
import { Suspense } from "react";

type Roles = keyof typeof ROLES;

const PrivateRoutes = ({ roles }: {roles: Roles[]}) => {
  const { user, loading } = useSession();

  if (loading || user === undefined) {
    return <div>Loading...</div>;
  }

  if (user === null) {
    return <Navigate to="/auth" />;
  }

  if (roles.length && !roles.includes(user.role as Roles)) {
    return <Navigate to="/auth" />;
  }

  return (
    <Suspense fallback={
      <div>
        <h1>Loading...</h1>
      </div>
    }>
      <Outlet />
    </Suspense>
  );
};

export { PrivateRoutes };
