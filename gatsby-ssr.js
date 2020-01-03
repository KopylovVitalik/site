import React from "react"
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      defer=""
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.4/gsap.js"
    ></script>,
  ])
}
