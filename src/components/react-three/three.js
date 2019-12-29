import React, { useState, useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {
  Canvas,
  extend,
  useThree,
  useRender,
  useFrame,
} from "react-three-fiber"
import { useSpring, a } from "react-spring/three"

extend({ OrbitControls })

// const SpaceShip = () => {
//   const [model, setModel] = useState()

//   useEffect(() => {
//     new GLTFLoader().load("/scene.gltf", setModel)
//   })

//   return model ? <primitive object={model.scene} /> : null
// }

const Controls = () => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useRender(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
)

// function toScreenPosition(obj, camera)
// {
//     var vector = new THREE.Vector3();

//     var widthHalf = 0.5*renderer.context.canvas.width;
//     var heightHalf = 0.5*renderer.context.canvas.height;

//     obj.updateMatrixWorld();
//     vector.setFromMatrixPosition(obj.matrixWorld);
//     vector.project(camera);

//     vector.x = ( vector.x * widthHalf ) + widthHalf;
//     vector.y = - ( vector.y * heightHalf ) + heightHalf;

//     return {
//         x: vector.x,
//         y: vector.y
//     };

// };


const Box = () => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "gray",
  })
  const boxRef = useRef(null)
  useFrame(() => {
    boxRef.current.rotation.y += 0.005
  })
  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
      position={[2, 2, 0]}
      ref={boxRef}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default () => {
  const isBrowser = typeof window !== "undefined"
  const canvasRef = useRef(null)
  

  useEffect(() => onDocumentMouseMove, [])

 

  const onDocumentMouseMove = event => {
    // var mouse = {}
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    // var vector = new THREE.Vector3(mouse.x, mouse.y, 0.5)
    // const camera = canvasRef.camera
    console.log(canvasRef)
    // vector.unproject(camera)
    // var dir = vector.sub(camera.position).normalize()
    // var distance = -camera.position.z / dir.z
    // var pos = camera.position.clone().add(dir.multiplyScalar(distance))
    // boxRef.current.position.set(pos)
  }

  return (
    <>
      {isBrowser && (
        <Canvas
          camera={{ position: [0, 0, 5] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
          // ref={el => (canvasRef = el)}
          style={{
            height: "100vh",
            margin: 0,
            padding: 0,
            width: "100vw",
            zIndex: 10,
            position: "absolute",
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
          onMouseMove={onDocumentMouseMove}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
          <Controls />
          <Box  />
          {/* <Plane /> */}
          {/* <SpaceShip /> */}
        </Canvas>
      )}
    </>
  )
}
