import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, BasicLayout, ClientLayout } from "../layouts";
import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientLayout />,
    errorElement: (
      <BasicLayout>
        <Error404 />
      </BasicLayout>
    ),
    children: routesClient,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: routesAdmin,
  },
]);
