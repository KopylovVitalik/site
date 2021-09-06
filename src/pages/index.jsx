import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import HeroSection from "../components/front-page/HeroSection";
import SkillsSection from "../components/front-page/SkillsSection";
import ExperienceSection from "../components/front-page/ExperienceSection";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="front-page">
      <div className="front-page__inner inner">
        <div className="front-page__hero">
          <HeroSection />
        </div>
        <div className="front-page__experience">
          <ExperienceSection />
        </div>
        <div className="front-page__skills">
          <SkillsSection />
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
