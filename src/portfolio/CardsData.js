import React from "react";

const CardsData = ({ Title, Background, Svg, Link, Caption }) => {
  return (
    // cover
    <div className="h-fit w-full overflow-hidden rounded-2xl bg-accent">
      {/* background image */}
      <img
        className="h-52 w-full object-cover object-top drop-shadow-xl"
        src={Background}
        alt="card-cv"
      />
      {/* title + redirect link */}
      <a
        className="relative flex items-baseline px-5 py-5 text-3xl font-bold text-white"
        href={Link}
        target="_blank"
        rel="noreferrer">
        {Title}
        <div className="absolute right-5">{Svg}</div>
      </a>
      {/* description */}
      <p className=" block h-28 text-ellipsis px-5 text-white">{Caption}</p>
    </div>
  );
};

export default CardsData;
