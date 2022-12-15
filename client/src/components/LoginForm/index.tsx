import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import loginSchema from "../../schemas/loginSchema";
import { IDonorLogin } from "../../types/donor";
import { login } from "../../api/donor";
import { loginUser } from "../../redux/auth";
import { LoginFormBtn } from "./index.styled";
import { setToken } from "../../utils/localStorage";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormFieldError,
} from "../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/UI/Alert/index.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginDonorSubmit = async (loginData: IDonorLogin) => {
    try {
      setIsLoading(true);
      const loginResponse = await login(loginData);
      dispatch(loginUser({ authenticatedUser: loginResponse.data.donor }));
      setIsLoading(false);
      setToken(loginResponse.data.accessToken, loginResponse.data.refreshToken);
      navigate("/blood-requests");
    } catch (err: any) {
      if (err.response.data) {
        setError([err.response.data.error]);
      }
      if (err.response?.data?.length) {
        setError([err.response?.data]);
      }
      setIsLoading(false);
      console.error(err);
    }
  };

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <>
      {error.length &&
        error.map((err, index) => (
          <Alert key={index}>
            <AlertText>{err}</AlertText>
            <AlertCancelBtn onClick={closeAlertMessage.bind(null, index)}>
              x
            </AlertCancelBtn>
          </Alert>
        ))}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLoginDonorSubmit}
        validationSchema={loginSchema}
      >
        {({ handleSubmit, handleChange, touched, errors, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <FormFieldError>{errors.email}</FormFieldError>
              ) : null}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <FormFieldError>{errors.password}</FormFieldError>
              ) : null}
            </FormControl>
            <LoginFormBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Login in..." : "Login"}
            </LoginFormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
