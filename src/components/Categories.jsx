import React, { use } from "react";
import { NavLink } from "react-router";


const categoryPromise = fetch("/categories.json").then((res) => res.json());


const Categories = () => {

    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className="font-semibold text-xl">All Categories</h2>
            <div className="cats grid grid-cols-1 mt-5 gap-3">
                {categories.map((category) => (
                    <NavLink
                        key={category.id}
                        className="btn bg-base-100 border-0 shadow-none hover:bg-base-200 font-medium font-xl text-accent"
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;