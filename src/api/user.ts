import { FormValues } from "@/utils/interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL; //?? "http://127.0.0.1:8000";

export async function loginApi(formValues: FormValues) {
  const url = `${baseUrl}/api/auth/login/`;

  const params = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  };
  const response = await fetch(url, params);

  if (response.status !== 200) {
    throw { status: "error", message: "Usuario o contraseña incorrectos" };
  }

  const result = await response.json();
  return { data: result };
}
