import { Icon, Menu } from "semantic-ui-react";
import logo from "@/assets/dchartLogo.svg";
import "./TopMenu.scss";
import { useAuth } from "@/hooks";
import { MyInfo } from "@/utils";

export const TopMenu = () => {
  const { auth, logout } = useAuth();

  const renderName = () => {
    const { first_name, last_name, email } = auth?.myInfo as MyInfo;

    if (first_name && last_name) {
      return `${first_name} ${last_name}`;
    }

    return email;
  };

  return (
    <Menu fixed="top" className="top-menu-admin">
      <Menu.Item className="top-menu-admin__logo">
        <img src={logo} alt="" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>Hola, {renderName()}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
