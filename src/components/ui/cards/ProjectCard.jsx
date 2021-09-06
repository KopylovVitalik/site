import React, { useRef, useEffect } from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import gsap from "gsap";
import { calculatePosition } from "../../../utils/utils";

const ProjectCard = ({ project, category }) => {
  const card = useRef(null);

  function exitToSinglePortfolio(exit, e, node) {
    // Calc image sizes
    const calcEl = document.querySelector(".single-project-image--calc");
    const fromEl = card.current;
    const toEl = calcEl;
    var from = calculatePosition(fromEl);
    var to = calculatePosition(toEl);
    const style = {
      x: to.left - from.left,
      y: to.top - from.top,
      width: to.width,
      height: to.height,
      autoRound: false,
    };
    fromEl.classList.add("is-current");
    const pageHeader = node.querySelector(".projects-page__header");
    const projects = [...node.querySelectorAll(".project-card")].filter(
      el => !el.classList.contains("is-current")
    );

    const bg = fromEl.querySelector(".project-card__overlay");
    const inner = fromEl.querySelector(".project-card__inner");

    gsap
      .timeline()
      .to([pageHeader, projects], { opacity: 0, duration: 0.2 })
      .add("start")
      .to(
        card.current,
        {
          ...style,
          duration: 0.9,
          delay: 0.2,
          ease: "power4.out",
        },
        "-=0.1"
      )
      .to(
        inner,
        {
          autoAlpha: 0,
          duration: 0.5,
        },
        "start"
      )
      .to(
        bg,
        {
          backgroundColor: "transparent",
          duration: 1,
        },
        "start"
      );
  }

  function enterSinglePortfolio(entry, node) {
    const image = node.querySelector(".single-project-image");
    const title = node.querySelectorAll("[data-anim='title']");
    const content = node.querySelectorAll("p, h2, h3, h4, h5, h6");
    const btn = node.querySelectorAll(".btn");

    gsap.set(title, { yPercent: 100 });
    gsap.set(content, { opacity: 0, y: 20 });
    gsap.set(btn, { opacity: 0 });

    gsap
      .timeline()
      .to(image, { opacity: 1, duration: 0.001 })
      .to(title, {
        // opacity: 1,
        yPercent: 0,
        // stagger: { amount: 1, ease: "power1.out" },
        duration: 0.5,
        ease: "power1.out",
      })
      .to(
        content,
        { opacity: 1, y: 0, stagger: 0.1, ease: "power1.out" },
        "-=0.2"
      )
      .to(btn, { opacity: 1, ease: "power1.out", duration: 0.4 });
  }

  return (
    <div className={`project-card project-card--${category}`} ref={card}>
      <div className="project-card__image-wrapper">
        {project.node?.image?.fluid && (
          <img
            className="project-card__image"
            src={`${project.node.image.fluid.src}`}
          />
        )}
        <div className="project-card__overlay"></div>
      </div>
      <div className="project-card__inner">
        <header className="project-card__header">
          <h3 className="project-card__title card-title">
            {project.node.name}
          </h3>
        </header>
        <div className="project-card__content">
          <div className="content">
            <TransitionLink
              className={`btn btn--${category}`}
              to={`/portfolio/${project.node.slug}`}
              exit={{
                length: 1.2,
                trigger: ({ exit, e, node }) =>
                  exitToSinglePortfolio(exit, e, node),
              }}
              entry={{
                delay: 1.2,
                trigger: ({ entry, node }) => enterSinglePortfolio(entry, node),
              }}
            >
              <span className="btn__text">More about</span>
            </TransitionLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
