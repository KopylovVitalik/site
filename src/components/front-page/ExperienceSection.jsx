import React from "react";
import ExperienceCard from "@components/ui/cards/ExperienceCard";

import DibssImage from "@images/companies/dibss.jpeg";
import BossImage from "@images/companies/dibss-no-bg.png";
import ArtdockImage from "@images/companies/artdock-no-bg.png";
import EpamImage from "@images/companies/epam-no-bg.png";

const WorksSection = () => {
  const companies = [
    {
      title: "DIBSS SOLUTIONS",
      image: DibssImage,
    },
    {
      title: "BOSS GAMING SOLUTIONS",
      image: BossImage,
    },
    {
      title: "Artdock Studio",
      image: ArtdockImage,
    },
    {
      title: "EPAM",
      image: EpamImage,
    },
  ];
  return (
    <div>
      <h2 className="page-title">My experience</h2>
      {companies.map((company, index) => {
        return (
          <ExperienceCard
            title={company.title}
            image={company.image}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default WorksSection;
