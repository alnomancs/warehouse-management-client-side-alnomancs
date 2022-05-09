import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const onSubmit = async (data) => {
    console.log(data.email, data.password);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/signin");
  };

  return (
    <div className="m-5">
      <h1>Please Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mt-2"
          type="text"
          {...register("name")}
          placeholder="Name"
          required
        />{" "}
        <br />
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
        <input
          className="mt-2"
          type="checkbox"
          {...register("checkbox")}
          placeholder="dadasdad"
          required
        />{" "}
        Please agree our terms and policy
        <br />
        <p style={{ color: "red" }}>{error?.message}</p>
        <input className="mt-2" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
