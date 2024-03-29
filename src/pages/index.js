import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import photo from "../images/photo_upd.jpeg";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <section className="front-page">
      <div className="front-page__inner inner">
        <div className="front-page__columns">
          <div className="front-page__left">
            <div className="content is-medium">
              <h1 className="title page-title">About me</h1>
              <p>I'm Vitalii Kopylov, front-end developer.</p>
              <p>
                I have 2+ years of experience in web development with the
                following technology stacks:
                <ul>
                  <li>HTML Templating - Nunjucks</li>
                  <li>CSS Templating - .SASS</li>
                  <li>JavaScript - ES2015 with webpack</li>
                  <li>Wordpress - Timber(TWIG) / ACF</li>
                  <li>React / Vue</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="front-page__right">
            <img src={photo} alt="Vitalii Koylov" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndexPage;
