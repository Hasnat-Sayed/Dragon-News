import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Header></Header>
                <section className=" my-6">
                    <LatestNews></LatestNews>
                </section>
                <nav className=" my-3">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="my-3 grid grid-cols-12 gap-5">
                <aside className="col-span-12 md:col-span-3 sticky pt-8 top-0 h-fit">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-12 md:col-span-6 pt-8">
                    {state == "loading" ? <Loading /> : <Outlet></Outlet>}
                </section>
                <aside className="col-span-12 md:col-span-3 sticky pt-8 top-0 h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;