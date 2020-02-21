import { Canvas, useFrame } from "react-three-fiber"
import React from "react"

function Thing() {
  const ref = React.useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={e => console.log("click")}
      onPointerOver={e => console.log("hover")}
      onPointerOut={e => console.log("unhover")}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default function() {
  return (
    <Canvas>
      <Thing />
    </Canvas>
  )
}
