import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "@/scss/global.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    />
  </AuthProvider>
);
