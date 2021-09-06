import React from "react";
import photo from "@images/photo-new.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__inner">
        <div className="hero-section__left">
          <div className="hero-section__title">
            <h1 className="page-title">About me</h1>
          </div>
          <div className="hero-section__text content">
            <p>I'm Vitalii Kopylov, front-end developer.</p>
            <p>
              I have 2+ years of experience in web development with the
              following technology stacks:
              <ul>
                <li>HTML Templating - Nunjucks</li>
                <li>CSS Templating - .SASS</li>
                <li>JavaScript - ES2015 with webpack</li>
                <li>Wordpress - Timber(TWIG) / ACF</li>
                <li>Vue / Vuex / Nuxt</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="hero-section__right">
          <img src={photo} alt="Vitalii Kopylov" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
