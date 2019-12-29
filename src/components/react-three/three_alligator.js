import { Canvas } from "react-three-fiber"
import Cubes from "./Cubes/index"
import Lights from "./Lights/index"
import Environment from "./Environment/index"
import React from "react"
import Layout from "../layout"

export default function Three() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw"
      }}
    >
      <Cubes />
      <Lights />
      <Environment />
    </Canvas>
  )
}
