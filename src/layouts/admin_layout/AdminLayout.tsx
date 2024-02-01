import { Outlet } from "react-router-dom";
import { LoginAdmin } from "../../pages/admin";

export const AdminLayout = () => {
  const auth = null;

  if (!auth) return <LoginAdmin />;

  return (
    <div>
      <h1>AdminLayout</h1>
      <Outlet />
    </div>
  );
};
