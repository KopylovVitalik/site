import React from "react";

import VueLogo from "@images/skills/vue-logo.png";
import NuxtLogo from "@images/skills/nuxt-logo.png";
import SkillsCard from "../ui/cards/SkillsCard";

const SkillsSection = () => {
  return (
    <section className="f-s-section">
      <div className="f-s-section__title f-p-title">
        <h2 className="page-title">Skills</h2>
      </div>
      <div className="f-s-section__row">
        <SkillsCard image={VueLogo} title="Vue, Vuex, Vue router" />
        <SkillsCard image={NuxtLogo} title="Nuxt" />
      </div>
    </section>
  );
};

export default SkillsSection;
