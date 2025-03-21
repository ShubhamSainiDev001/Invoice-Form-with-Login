import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      localStorage.setItem("session", JSON.stringify(values));
      navigate("/main");
      window.location.reload();
    },
  });

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "#f4f4f9" }}
    >
      <div
        className="card shadow"
        style={{ maxWidth: "400px", width: "100%", padding: "20px" }}
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Welcome Back!</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
              {formik.errors.username && (
                <div className="text-danger mt-1">{formik.errors.username}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password && (
                <div className="text-danger mt-1">{formik.errors.password}</div>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
