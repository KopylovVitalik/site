import React from "react";

import VueLogo from "@images/skills/vue-logo.svg";
console.log(VueLogo);

const SkillsSection = () => {
  return (
    <div>
      <div className="page-title">My skills</div>
      <img src={VueLogo} alt="Logo" />
    </div>
  );
};

export default SkillsSection;
