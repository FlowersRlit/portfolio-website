import React from "react";
import AchievementData from "./AchievementData";
import EHachievement from "../assets/EHachievement.jpg";
import PiagamOSHK from "../assets/PIAGAM OSHK.jpg";
import ProgatePython from "../assets/progatepython.png";

const Achievement = () => {
  return (
    <>
      {/* section title */}
      <h1 className="pb-10 pt-40 text-center text-lg font-bold text-primary md:text-5xl">
        Hall of Acknowledgement
      </h1>
      {/* first card */}
      <div className="static mb-10 grid items-center gap-10 md:grid-cols-3">
        <AchievementData
          Title="The Most Dilligent Student & Teacher of The Year"
          Background={EHachievement}
          Caption='Honorable mention of the year "English Teachers" program of 2022.'
        />
        {/* second card */}
        <AchievementData
          Title="Dewan Eksekutif (DE) OSHK Madrasah Aliyah"
          Background={PiagamOSHK}
          Caption="Sebagai staff Bidang Media Jurnalistik DE-OSHK MA Husnul Khotimah."
        />
        {/* third card */}
        <AchievementData
          Title="Python Fundamental Course"
          Background={ProgatePython}
          Caption="Sertifikat penyelesaian 5 kursus Python Fundamental Progate."
        />
      </div>
    </>
  );
};

export default Achievement;
