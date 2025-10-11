import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Submission:", values);
    alert("User registered successfully!");
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field name="username" type="text" placeholder="Username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
