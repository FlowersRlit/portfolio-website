import React from "react";

const AchievementData = ({ Title, Backgrouond, Caption }) => {
  return (
    <div className="mb-20 h-fit w-full pb-5">
      <img
        className="h-48 w-full object-contain"
        src={Backgrouond}
        alt="achievement-display"
      />
      <h3 className="pt-5 pb-2 text-center text-2xl font-semibold leading-tight text-secondary-focus">
        {Title}
      </h3>
      <p className="block h-10 text-ellipsis px-5 text-center text-base leading-none text-info-content">
        {Caption}
      </p>
    </div>
  );
};

export default AchievementData;
