import { FormValues } from "@/utils/interfaces";

const baseUrl = import.meta.env.VITE_BASE_URL ?? "http://127.0.0.1:8000";

export async function loginApi(formValues: FormValues) {
  const url = `${baseUrl}/api/auth/login/`;

  const params = {
    method: "POST",
    headers: {
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

export async function getMeApi(token: string) {
  const url = `${baseUrl}/api/auth/me/`;
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url, params);

  if (response.status !== 200) {
    throw {
      status: "error",
      message: "No se puede obtener la información del usuario",
    };
  }

  const data = await response.json();

  return { data };
}
