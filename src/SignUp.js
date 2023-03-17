import { Formik, Field, ErrorMessage, Form } from "formik";
import "./Signup.css";
import * as Yup from "yup";

const Signup = () => {
  const ErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "username min 2 characters")
      .max(40, "Must be 40 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <div className="container">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={ErrorMessagesSchema}
        onSubmit={(values) => {}}
      >
        <Form className="signup_form">
          <label htmlFor="username">Username</label>
          <Field type="text" name="username" placeholder="Enter Full Name" />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />

          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="Enter Your Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />

          <button type="submit" className="signupbtn">
            SIGN IN
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
