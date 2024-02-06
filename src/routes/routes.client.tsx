import { RouteObject } from "react-router-dom";
import { HomeClient } from "@/pages/client";

const routesClient: RouteObject[] = [
  {
    index: true,
    element: <HomeClient />,
  },
];

export default routesClient;
