import React from "react";
import Gallery from "./Gallery";
import GreetingsCard from "./GreetingsCard";
import Introduction from "./Introduction";

const Beranda = () => {
  return (
    // background start
    <div className="container my-40 flex h-auto flex-col items-center justify-center gap-6 md:my-28">
      <GreetingsCard />
      <Introduction />
      <Gallery />
    </div>
  );
};

export default Beranda;
