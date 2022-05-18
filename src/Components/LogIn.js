import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "./SocialLogIn";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "./Loading";

const LogIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate()

  const location = useLocation();
  let from = location.state?.from?.pathname || '/'
  useEffect(()=>{
    if(user){
      navigate(from, {replace: true})
    }
  },[from,navigate, user])

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    console.log(data);
  };

  if(loading){
    return <Loading></Loading>
}
let errorElement;
if(error){
  errorElement=  <p>Error: {error.message}</p>
}

  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl">Log In</h2>
        <div className="form-control w-full max-w-xs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please Give a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "password must be 5 character or long",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorElement}
            <input className="btn btn-wide" value="Log In" type="submit" />
            <button className="btn btn-link btn-sm mt-5">
              Forget Password ?
            </button>
          </form>
          <div className="mt-4">
            <p>
              <small>
                New to To-do app ?{" "}
                <Link className="text-primary" to={"/signup"}>
                  Create Account
                </Link>
              </small>
            </p>
          </div>
          <div className="mt-4">
            <div className="divider">OR</div>
          </div>
          <div className="mt-4">
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
