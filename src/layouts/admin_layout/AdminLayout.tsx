import { Outlet } from "react-router-dom";
import { LoginAdmin } from "../../pages/admin";
import { useAuth } from "@/hooks";

export const AdminLayout = () => {
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <h1>AdminLayout</h1>
      <Outlet />
    </div>
  );
};
