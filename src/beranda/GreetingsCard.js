import React from "react";
import avatar from "../assets/kelas.jpg";

const GreetingsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
      <div className="drop h-40 w-40 overflow-hidden rounded-2xl bg-black shadow-primary">
        <img
          src={avatar}
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="text-center md:text-start">
        <h1 className="text-lg font-semibold text-primary md:text-5xl">
          Greetings.
        </h1>
        <p className="text-xs md:text-base">
          Hey, my name is Chika Kirana Syafruddin.
        </p>
      </div>
    </div>
  );
};

export default GreetingsCard;
