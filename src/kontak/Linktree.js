import React from "react";
import ContactsData from "./ContactsData";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLine } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Linktree = () => {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="text-5xl font-bold text-primary">Let's connect!</div>
      <div className="py-10">
        {/* first link */}
        <ContactsData
          // title
          Name="WhatsApp"
          //   icon
          Svg={<FaWhatsapp className="h-5 w-5" />}
          //   redirect
          Link="https://wa.me/6282298715744"
        />
        {/* second link */}
        <ContactsData
          Name="Instagram"
          Svg={
            <GrInstagram
              className="h-5 w-5"
              Link="https://www.instagram.com/chikakikoek/"
            />
          }
        />
        {/* Third link */}
        <ContactsData
          Name="LINE"
          Svg={<BsLine className="h-5 w-5" />}
          Link="https://line.me/ti/p/jq3IQmRyu8"
        />
        {/* Forth link */}
        <ContactsData
          Name="GitHub"
          Svg={<FiGithub className="h5 w-5" />}
          Link="https://github.com/FlowersRlit"
        />
      </div>
    </div>
  );
};

export default Linktree;
