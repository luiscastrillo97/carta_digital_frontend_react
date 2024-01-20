import { RouteObject } from "react-router-dom";
import { LoginAdmin } from "../pages/admin";

const routesAdmin: RouteObject[] = [
  {
    index: true,
    element: <LoginAdmin />,
  },
];

export default routesAdmin;
