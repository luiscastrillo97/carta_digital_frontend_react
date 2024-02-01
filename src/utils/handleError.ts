import { toast } from "react-toastify";
import { ErrorAPI } from ".";

export const handleError = (error: unknown) => {
  const errorApi = error as ErrorAPI;
  toast.error(errorApi?.message);
};
