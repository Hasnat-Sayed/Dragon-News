import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
//   console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signIn(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center mt-24">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl pt-10 pb-3">
        <h2 className="font-semibold text-3xl text-center pb-7 mx-10 border-base-200 border-b">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset md:px-20">
            {/* email  */}
            <label className="label font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full bg-base-200"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <label className="label font-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full bg-base-200"
              placeholder="Password"
              required
            />
            <div className="pt-2">
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-3">
              Login
            </button>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary hover:underline" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;