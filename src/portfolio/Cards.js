import React from "react";
import CardsData from "./CardsData";
import rekayasakertas from "../assets/rekayasakertas.png";
import medium from "../assets/medium.png";
import github from "../assets/github.png";
import { FaBloggerB } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Cards = () => {
  return (
    <>
      {/* section: hobbies */}
      <h2 className="py-10 text-center text-5xl font-bold text-primary">
        Check out my works.
      </h2>
      {/* first card */}
      <div className="static grid grid-cols-3 gap-10">
        <CardsData
          Title="Blogspot"
          Background={rekayasakertas}
          Link="https://rekayasakertas.blogspot.com/"
          Svg={<FaBloggerB className="place-self-center" />}
          Caption="RekayasaKosakata - lasting for only a short time. Sepatah tulisan dari penulis untuk pembaca. Menghampiri yang sementara, dan menjadikannya selamanya."
        />
        {/* second card */}
        <CardsData
          Title="Medium"
          Background={medium}
          Link="https://medium.com/@FlowersRlit"
          Svg={<SiMedium className="place-self-center" />}
          Caption="Fantasize my own world inside this tiny head, another ordinary human being, and your friendly neighborhood."
        />
        {/* third card */}
        <CardsData
          Title="GitHub"
          Background={github}
          Link="https://github.com/FlowersRlit"
          Svg={<FiGithub className="place-self-center" />}
          Caption="ordinary student with ordinary knowledge to be shared."
        />
      </div>
    </>
  );
};

export default Cards;
