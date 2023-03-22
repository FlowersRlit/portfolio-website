import React from "react";

const ContactsData = ({ Name, Svg, Link }) => {
  return (
    <a
      className="relative mx-10 my-10 flex w-[50rem] items-center justify-center rounded-full bg-primary py-4 text-center text-white"
      href={Link}
      target="_blank"
      rel="noreferrer">
      {Name}
      <div className="absolute left-5 h-5 w-5">{Svg}</div>
    </a>
  );
};

export default ContactsData;