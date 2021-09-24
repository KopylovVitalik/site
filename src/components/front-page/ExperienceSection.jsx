import React from "react";
import ExperienceCard from "@components/ui/cards/ExperienceCard";

import DibssImage from "@images/companies/dibss-no-bg.png";
import BossImage from "@images/companies/dibss-no-bg.png";
import ArtdockImage from "@images/companies/artdock-no-bg.png";
import EpamImage from "@images/companies/epam-no-bg.png";

const WorksSection = () => {
  const companies = [
    {
      title: "DIBSS SOLUTIONS",
      timeline: "06.2018 - 04.2019",
      descr: `
        <p>Creating responsive cross-browser layouts of web-pages with the implementation of all user interactions.</p>
        <p>Creating component-based layouts with BEM methodology</p>
        <p>CSS / JS web-animations</p>
      `,
      image: DibssImage,
      wave: true,
    },
    {
      title: "BOSS GAMING SOLUTIONS",
      timeline: "04.2019 - 12.2019",
      descr: `
        <p>Creating responsive cross-browser layouts of web-pages with the implementation of all user interactions.</p>
        <p>Creating component-based layouts with BEM methodology</p>
        <p>CSS / JS web-animations</p>
      `,
      image: BossImage,
      wave: false,
    },
    {
      title: "Artdock Studio",
      timeline: "01.2020 - 07.2021",
      descr: `
        <p>Creating responsive cross-browser layouts of web-pages with the implementation of all user interactions.</p>
        <p>Creating component-based layouts with BEM methodology</p>
        <p>CSS / JS web-animations</p>
      `,
      image: ArtdockImage,
      wave: false,
    },
    {
      title: "EPAM",
      timeline: "08.2021 - now",
      descr: `
        <p>Creating responsive cross-browser layouts of web-pages with the implementation of all user interactions.</p>
        <p>Creating component-based layouts with BEM methodology</p>
        <p>CSS / JS web-animations</p>
      `,
      image: EpamImage,
      wave: true,
    },
  ];
  return (
    <section className="f-e-section">
      <div className="f-e-section__title f-p-title">
        <h2 className="page-title">Experience</h2>
      </div>
      {companies.map((company, index) => {
        return (
          <ExperienceCard
            title={company.title}
            timeline={company.timeline}
            descr={company.descr}
            image={company.image}
            wave={company.wave}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default WorksSection;
