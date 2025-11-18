import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        console.log("user trying to LogOut");
        logOut()
            .then(() => {
                alert("You Logged Out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
            <div className="flex-1 text-accent font-semibold">{user && user.displayName}</div>
            <div className="nav flex flex-1 justify-center gap-5 text-accent">
                <NavLink className="hover:font-medium hover:text-black" to="/category/0">Home</NavLink>
                <NavLink className="hover:font-medium hover:text-black" to="/about">About</NavLink>
                <NavLink className="hover:font-medium hover:text-black" to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex flex-1 justify-end items-center gap-5">
                <img
                    className="w-12 rounded-full"
                    src={`${user?.photoURL ? user.photoURL : userIcon}`}
                    alt=""
                />
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-primary px-10 ">
                        Log Out
                    </button>
                ) : (
                    <Link to="/auth/login" className="btn btn-primary px-10 ">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;