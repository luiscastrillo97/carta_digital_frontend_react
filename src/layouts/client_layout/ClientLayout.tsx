import { Outlet } from "react-router-dom";

export const ClientLayout = () => {
  return (
    <div>
      <h1>ClientLayout</h1>
      <Outlet />
    </div>
  );
};
