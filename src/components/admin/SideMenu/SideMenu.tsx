import React, { useEffect, useState } from "react";
import { Icon, Menu, SemanticICONS } from "semantic-ui-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "@/utils/constants";
import { useAuth } from "@/hooks";
import "./SideMenu.scss";

interface Props {
  children: React.ReactNode;
}

export const SideMenu = (props: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth?.myInfo?.is_staff && pathname === "/admin/users") {
      navigate("/admin");
    }
    setIsLoading(false);
  }, []);

  const isActive = (path: string) => {
    return path === pathname;
  };

  const menuItems = () => {
    let menuItemsToShow = MENU_ITEMS;
    if (!auth?.myInfo?.is_staff) {
      menuItemsToShow = MENU_ITEMS.filter((item) => item.title !== "Usuarios");
    }
    return menuItemsToShow.map((item) => (
      <Menu.Item
        as={Link}
        to={item.path}
        active={isActive(item.path)}
        key={`menu-${item.title}`}
      >
        <Icon name={`${item.iconName as SemanticICONS}`} /> {item.title}
      </Menu.Item>
    ));
  };

  if (isLoading) return "Loading...";

  return (
    <div className="side-menu-admin">
      <Menu fixed="left" borderless vertical className="side">
        {menuItems()};
      </Menu>
      <div className="content">{children}</div>
    </div>
  );
};
