import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Quote = () => {
  return (
    // headline
    <h1 className="my-10 pl-5 text-left text-xl font-medium leading-tight text-primary-content md:my-20 md:max-w-6xl md:pl-10 md:text-6xl md:font-semibold">
      "Your scores from {/* typing effect start */}
      <ReactTypingEffect
        className="bg-primary-content text-secondary"
        speed={300}
        typingDelay={100}
        text={["college", "school"]}
        cursor="_"
      />{" "}
      {/* typing effect end */}
      <span className="text-secondary-focus">don't matter</span> as long as
      you're <span className="italic">talented</span>."
    </h1>
  );
};

export default Quote;
