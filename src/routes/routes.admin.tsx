import { RouteObject } from "react-router-dom";
import { HomeAdmin, UsersAdmin } from "@/pages/admin";

const routesAdmin: RouteObject[] = [
  {
    index: true,
    element: <HomeAdmin />,
  },
  {
    path: "/admin/users",
    element: <UsersAdmin />,
  },
];

export default routesAdmin;
