import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {

  return (
    <div className="space-y-5 p-6 border border-[#E7E7E7] rounded-2xl">
      <img
        className="w-full h-[350px] object-cover rounded-2xl"
        src={news.image_url}
        alt=""
      />
      <h2 className="font-bold text-2xl">{news.title}</h2>

      <p className="text-accent">{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        {" "}
        Back to this Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;