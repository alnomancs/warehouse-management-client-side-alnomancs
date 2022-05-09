import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
