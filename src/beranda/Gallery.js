import React from "react";
import bandung from "../assets/bandung.jpg";
import bertiga from "../assets/bertiga.jpg";
import dfairy from "../assets/dfairy.jpg";
import dini from "../assets/dini.jpg";
import alika from "../assets/haflah-alika.jpg";
import berempat from "../assets/haflah-berempat.jpg";
import janspark from "../assets/janspark.jpg";
import tahsin from "../assets/tahsin.jpg";
import utbk from "../assets/utbk.jpg";

const Gallery = () => {
  return (
    <div className="grid-colls-2 grid-row-2 grid h-[900px] w-full gap-3 p-5 md:grid-cols-4 md:grid-rows-4 md:gap-5">
      {/* 1 */}
      <div className="mask-rounded">
        <img
          className="grid-items object-center md:object-bottom"
          src={dini}></img>
      </div>

      {/* 2 */}
      <div className="mask-rounded col-span-2">
        <img
          className="grid-items object-center md:object-top"
          src={utbk}></img>
      </div>

      {/* 6 */}
      <div className="mask-rounded row-span-2">
        <img className="grid-items" src={janspark}></img>
      </div>

      {/* 4 */}
      <div className="mask-rounded col-span-2 h-full w-full overflow-hidden">
        <img className="grid-items" src={berempat}></img>
      </div>

      {/* 5 */}
      <div className="mask-rounded">
        <img className="grid-items object-center" src={alika}></img>
      </div>

      {/* 7 */}
      <div className="mask-rounded row-span-2">
        <img className="grid-items" src={bandung}></img>
      </div>

      {/* 8 */}
      <div className="mask-rounded">
        <img
          className="grid-items object-top md:object-center"
          src={bertiga}></img>
      </div>

      {/* 9 */}
      <div className="mask-rounded col-span-2 row-span-2">
        <img className="grid-items" src={tahsin}></img>
      </div>

      {/* 10 */}
      <div className="mask-rounded">
        <img
          className="grid-items object-top md:object-center"
          src={dfairy}></img>
      </div>
    </div>
  );
};

export default Gallery;
