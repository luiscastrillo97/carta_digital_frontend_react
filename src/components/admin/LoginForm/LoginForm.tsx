import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { loginApi } from "@/api/user";
import { FormValues } from "@/utils/interfaces";
import * as Yup from "yup";
import "./LoginForm.scss";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => handleOnSubmit(formValue),
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

async function handleOnSubmit(formValues: FormValues) {
  try {
    const response = await loginApi(formValues);
    const { access } = response.data;
    console.log("access", access);
  } catch (error) {
    toast.error(error?.message);
  }
}
