import React from "react";

const CardsData = ({ Title, Background, Svg, Link, Caption }) => {
  return (
    // cover
    <div className="h-fit w-full overflow-hidden rounded-2xl bg-accent">
      {/* background image */}
      <img
        className="h-28 w-full object-cover object-top shadow drop-shadow-xl md:h-52"
        src={Background}
        alt="card-cv"
      />
      {/* title + redirect link */}
      <a
        className="relative flex items-baseline px-5 py-3 text-xl font-bold text-white md:py-5 md:text-3xl"
        href={Link}
        target="_blank"
        rel="noreferrer">
        {Title}
        <div className="absolute right-5">{Svg}</div>
      </a>
      {/* description */}
      <p className="block h-16 overflow-hidden text-ellipsis px-5 pb-5 text-xs text-white md:h-28 md:text-base">
        {Caption}
      </p>
    </div>
  );
};

export default CardsData;
