import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more then 5 character");
            return;
        } else {
            setNameError("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, photo, email, password });
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode);
                // ..
            });
    };
    return (
        <div className="flex justify-center mt-12">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl pt-10 pb-3">
                <h2 className="font-semibold text-3xl text-center pb-7 mx-10 border-base-200 border-b">
                    Register your account
                </h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset md:px-20">
                        {/* Name  */}
                        <label className="label font-semibold">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full bg-base-200"
                            placeholder="Name"
                            required
                        />

                        {nameError && <p className="text-xs text-error">{nameError}</p>}

                        {/* Photo URl  */}
                        <label className="label font-semibold">Photo URl </label>
                        <input
                            name="photo"
                            type="text"
                            className="input w-full bg-base-200"
                            placeholder="Photo URl"
                        />

                        {/* email  */}
                        <label className="label font-semibold">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full bg-base-200"
                            placeholder="Email"
                            required
                        />

                        {/* password  */}
                        <label className="label font-semibold">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full bg-base-200"
                            placeholder="Password"
                            required
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                        <p className="font-semibold text-center pt-5">
                            Already Have An Account ?{" "}
                            <Link className="text-secondary hover:underline" to="/auth/login">
                                Login
                            </Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;