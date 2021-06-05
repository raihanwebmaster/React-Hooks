import React from "react";
import "./Test.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const diffToast = () => {
    // alert("hello raihan");
    toast.error("Login Failled !!", {
      position: "top-center",
    });
  };
  return (
    <>
      <div className="main-div">
        <h2>Welcome to signin page</h2>
        <button className="btn btn-primary" onClick={diffToast}>
          Login
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
