import React from "react";
import Gallery from "./Gallery";
import GreetingsCard from "./GreetingsCard";

const Beranda = () => {
  return (
    // background start
    <div className="container my-40 flex h-screen flex-col items-center justify-center gap-6 md:my-28">
      <GreetingsCard />

      <Gallery />
    </div>
  );
};

export default Beranda;
