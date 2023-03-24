import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { NavLink } from "react-router-dom";

const Introduction = () => {
  return (
    // introduction text start
    <di className="mx-32 my-20 max-h-screen self-start py-10">
      <h2 className="text-center text-3xl font-semibold leading-relaxed text-info-content">
        {/* static text */}I am Chika, a Food Technology student of Padjadjaran
        University, Jatinangor 2022. I like to {/* typing effect start */}
        <ReactTypingEffect
          text={[
            "have a small chit chat.",
            "develop posh websites.",
            "write poetries.",
          ]}
          speed={150}
          eraseSpeed={100}
          cursor=" "
          className="italic text-accent"
        />{" "}
        {/* typing effect end */}
        Nice to meet you!
      </h2>
      {/* shortcut to portfolio */}
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
