import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { NavLink } from "react-router-dom";

const Introduction = () => {
  return (
    <di className="mx-32 my-20 max-h-screen self-start py-10">
      <h2 className="text-center text-3xl font-semibold leading-relaxed text-info-content">
        I am Chika, a Food Technology student of Padjadjaran University,
        Jatinangor 2022. I like in-depth discussion and{" "}
        <ReactTypingEffect
          text={[
            "a small chit chat.",
            "develop posh websites.",
            "write poetries.",
          ]}
          speed={150}
          eraseSpeed={100}
          cursor=" "
          className="italic text-accent"
        />{" "}
        Nice to meet you!
      </h2>
      <h3 className="text-center">
        Let me see your{" "}
        <NavLink
          to="/portfolio"
          className="underline hover:text-neutral-content">
          portfolio
        </NavLink>
        !
      </h3>
    </di>
  );
};

export default Introduction;
