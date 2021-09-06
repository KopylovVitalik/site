import React from "react";

const SocialLinks = props => {
  const SOCIAL_ARR = [
    {
      icon: "github",
      link: "https://github.com/KopylovVitalik",
    },
    {
      icon: "linkedin-in",
      link: "https://www.linkedin.com/in/vitaly-kopylov-5b7ba417/",
    },
  ];
  const SOCIAL_LINKS = SOCIAL_ARR.map((app, index) => (
    <li key={index} className={`social__link link--${app.icon}`}>
      <a href={`${app.link}`} target="blank_" />
      <i className={`fab fa-2x fa-${app.icon}`} />
    </li>
  ));
  return (
    <>
      <ul className="social-links">{SOCIAL_LINKS}</ul>
    </>
  );
};

function Footer() {
  return (
    <footer className="footer has-background-white-ter">
      <div className="footer__inner inner">
        <div className="footer__content content">
          <p className="is-size-5">Created by V.Kopylov</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
