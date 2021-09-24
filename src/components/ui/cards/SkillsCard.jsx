import React from "react";

const SkillsCard = ({ image, title }) => {
  return (
    <div className="skills-card">
      <img className="skills-card__img" src={image} alt="" />
      {title && <h2 className="skills-card__title">{title}</h2>}
    </div>
  );
};

export default SkillsCard;
