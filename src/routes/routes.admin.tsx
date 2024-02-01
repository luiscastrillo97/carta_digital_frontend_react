import { RouteObject } from "react-router-dom";
import { HomeAdmin } from "../pages/admin";

const routesAdmin: RouteObject[] = [
  {
    index: true,
    element: <HomeAdmin />,
  },
];

export default routesAdmin;
