import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Quote = () => {
  return (
    // headline
    <h1 className="my-20 max-w-6xl pl-10 text-left text-6xl font-semibold leading-tight text-primary-content">
      "Your scores from{" "}
      <ReactTypingEffect
        className="bg-primary-content text-secondary"
        speed={300}
        typingDelay={100}
        text={["college", "school"]}
        cursor="_"
      />{" "}
      <span className="text-secondary-focus">don't matter</span> as long as
      you're <span className="italic">talented</span>."
    </h1>
  );
};

export default Quote;
