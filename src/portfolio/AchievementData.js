import React from "react";

const AchievementData = ({ Title, Background, Caption }) => {
  return (
    <div className="mb-10 h-fit w-full pb-5 md:mb-20">
      <img
        className="h-36 w-full object-contain md:h-48"
        src={Background}
        alt="achievement-display"
      />
      <h3 className="pt-5 pb-2 text-center text-base font-semibold leading-tight text-secondary-focus md:text-2xl">
        {Title}
      </h3>
      <p className="block h-3 text-ellipsis px-5 text-center text-xs leading-none text-info-content md:h-10 md:text-base">
        {Caption}
      </p>
    </div>
  );
};

export default AchievementData;
