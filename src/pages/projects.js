import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react"
// A THREE.js React renderer, see: https://github.com/drcmda/react-three-fiber
import {
  apply as applyThree,
  Canvas,
  useRender,
  useThree,
} from "react-three-fiber"
// A React animation lib, see: https://github.com/react-spring/react-spring
import * as THREE from "three"
import {
  apply as applySpring,
  useSpring,
  useTransition,
  a,
  interpolate,
} from "react-spring/three"

import Image from "../components/image"
import SEO from "../components/seo"

function ProjectImage({ url, opacity = 1, scale = 1, ...props }) {
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url])
  const [hovered, setHover] = useState(false)
  const hover = useCallback(() => setHover(true), [])
  const { factor } = useSpring({ factor: hovered ? 1.1 : 1 })

  return (
    <Canvas>
      <a.mesh
        {...props}
        onHover={hover}
        scale={factor.interpolate(f => [scale * f, scale * f, 1])}
      >
        <planeBufferGeometry attach="geometry" args={[15, 15]} />
        <meshLambertMaterial attach="material" opacity={opacity}>
          <primitive attach="map" object={texture} />
        </meshLambertMaterial>
      </a.mesh>
    </Canvas>
  )
}

const ContentfulProject = ({ data }) => {
  const [projects, setProjects] = useState("all")
  // const [isShow, setShow] = useState(true)

  const selectProjects = projectName => {
    setProjects(projectName)
  }

  // const setCategoryVisibility = category => {
  //   const isShowVar = category === projects || projects === "all"
  //   setShow(isShowVar)
  // }

  // const transition = useTransition(projects, null,{
  //   from: { transform: `scaleX(0)` },
  //   enter: { transform: `scaleX(1)` },
  //   leave: { transform: `scaleX(0)` },
  // })
  // const navAnim = useSpring({
  //   from: { opacity: 0, transform: `translateY(-100px)` },
  //   to: { opacity: 1, transform: `translateY(0)` },
  // })

  return (
    <>
      <SEO title="About" />
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="controllers columns">
              <div className="controller column">
                <button
                  className="button"
                  onClick={() => selectProjects("all")}
                >
                  All
                </button>
              </div>
              <div className="controller column">
                <button
                  className="button"
                  onClick={() => selectProjects("css")}
                >
                  CSS
                </button>
              </div>
              <div className="controller column">
                <button
                  className="button"
                  onClick={() => selectProjects("react")}
                >
                  React
                </button>
              </div>
            </div>
            <div className="columns">
              {data.allContentfulProject.edges.map((project, i) => {
                const category = project.node.category
                const isShow = category === projects || projects === "all"
                return (
                  isShow && (
                    // transition.map(
                    //   ({ item, props, key }) =>
                    //     item && (
                    <div className="column" key={i}>
                      <div className={`project-card project-card--${category}`}>
                        <div
                          className="project-card__bg"
                          style={{
                            backgroundImage: `url(${project.node.image.fluid.src})`,
                          }}
                        >
                          {/* <img src={project.node.image.fluid.src} /> */}
                          {/* <ProjectImage url={project.node.image.fluid.src} /> */}
                        </div>
                        <div className="project-card__inner">
                          <header className="project-card__header">
                            <h3 className="is-size-4 card-header-title">
                              {project.node.name}
                            </h3>
                          </header>
                          <div className="project-card__content">
                            <div className="content">
                              <Link
                                className="button is-success is-outlined"
                                to={`/projects/${project.node.slug}`}
                              >
                                About project
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          tag
          slug
          name
          category
          image {
            fluid {
              src
            }
          }
          childContentfulProjectDescriptionRichTextNode {
            content {
              nodeType
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`

export default ContentfulProject
