import React from "react";
import Cards from "./Cards";
import Quote from "./Quote";
import Achievement from "./Achievement";

const Portfolio = () => {
  return (
    <>
      {/* portfolio page start */}
      <div className="container h-auto">
        <Quote />
        <Cards />
        <Achievement />
      </div>
    </>
  );
};

export default Portfolio;
