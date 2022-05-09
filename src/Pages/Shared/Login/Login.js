import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    // const email = emailRef.current.value;
    // if (email) {
    //   await sendPasswordResetEmail(email);
    //   toast("Sent email");
    // } else {
    //   toast("please enter your email address");
    // }
    toast("Sent email");
    toast("please enter your email address");
  };
  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-2"
          type="email"
          {...register("email")}
          placeholder="Email Address"
          required
        />{" "}
        <br />
        <input
          className="mt-2"
          type="password"
          {...register("password")}
          placeholder="Password"
          required
        />{" "}
        <br />
        <p style={{ color: "red" }}>{error?.message}</p>
        <input className="mt-2" type="submit" value="Login" />
      </form>
      <button
        className="btn btn-link text-primary pe-auto text-decoration-none"
        onClick={resetPassword}
      >
        Reset Password
      </button>{" "}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
