import { useAuth } from "@/hooks";
useAuth;

export const HomeAdmin = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};
