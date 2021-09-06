import React from "react";
import ExperienceImage from "../ExperienceImage";

const ExperienceCard = ({ title, image }) => {
  return (
    <div className="e-card">
      <div className="e-card__image">
        <ExperienceImage image={image} />
      </div>
      <div className="e-card__title">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default ExperienceCard;
