import { Outlet } from "react-router-dom";
import "./AdminLayout.scss";
import { LoginAdmin } from "../../pages/admin";
import { useAuth } from "@/hooks";
import { TopMenu, SideMenu } from "@/components/admin";

export const AdminLayout = () => {
  const { auth } = useAuth();

  if (!auth) return <LoginAdmin />;

  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        <TopMenu />
      </div>

      <div className="admin-layout__main-content">
        <SideMenu>
          <Outlet />
        </SideMenu>
      </div>
    </div>
  );
};
