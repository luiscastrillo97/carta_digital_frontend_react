import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { loginApi } from "@/api/user";
import { FormValues } from "@/utils/interfaces";
import * as Yup from "yup";
import "./LoginForm.scss";
import { useAuth } from "@/hooks";
import { handleError } from "@/utils";

export const LoginForm = () => {
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => handleOnSubmit(formValue, login),
  });
  return (
    <Form className="login-form-admin" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        placeholder="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Button type="submit" content="Iniciar sesión" primary fluid />
    </Form>
  );
};

function initialValues() {
  return { email: "", password: "" };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email("Correo inválido")
      .required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  };
}

async function handleOnSubmit(
  formValues: FormValues,
  login: (token: string) => Promise<void>
) {
  try {
    const response = await loginApi(formValues);
    const { access } = response.data;
    login(access);
  } catch (error) {
    handleError(error);
  }
}
