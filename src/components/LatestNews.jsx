import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 md:px-6 py-2 md:text-xl">Latest</p>

      <Marquee className="flex font-medium" pauseOnHover={true} speed={60}>
        <p className="mr-7">
          Ex-Bangladesh PM Hasina sentenced to death for crimes against humanity.
        </p>
        <p className="mr-7">
          Saudi bus tragedy kills 45 Indian pilgrims; families shattered.
        </p>
        <p className="mr-7">
          Explosion on Polish railway deemed 'unprecedented act of sabotage.'
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;