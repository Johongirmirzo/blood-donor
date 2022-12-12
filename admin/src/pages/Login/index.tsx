import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  const { fullname } = useSelector((state: RootState) => state.admin);
  const navigate = useNavigate();
  useEffect(() => {
    if (fullname) {
      navigate("/");
    }
  }, [fullname]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
