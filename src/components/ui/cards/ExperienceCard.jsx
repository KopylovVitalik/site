import { timeline } from "animejs";
import React from "react";
import ExperienceImage from "../ExperienceImage";

const ExperienceCard = ({ title, image, timeline, descr, wave }) => {
  return (
    <div className="e-card">
      <div className="e-card__image">
        {wave && <ExperienceImage image={image} />}
      </div>
      <div className="e-card__text">
        <div className="e-card__title">
          <h2 class="title title--white">{title}</h2>
        </div>
        <div className="e-card__timeline">{timeline}</div>
        <div
          className="e-card__descr"
          dangerouslySetInnerHTML={{ __html: descr }}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
