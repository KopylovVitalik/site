import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, Dom, useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";

import image1 from "@images/pexels-dids-2969918.jpeg";

function Plane({ color = "white", map, ...props }) {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}

function Content({ children, map }) {
  return (
    <group>
      <Plane color="#bfe2ca" map={map} />
      {children}
    </group>
  );
}

function Block() {
  const image = useLoader(TextureLoader, image1);
  console.log(image1, image);
  const { size, viewport } = useThree();
  const viewportWidth = viewport.width;
  const viewportHeight = viewport.height;
  console.log(viewportWidth);
  return (
    <>
      <Content left map={image} />
    </>
  );
}

export default function ExperienceBlock() {
  return (
    <>
      <Canvas
        className="canvas"
        orthographic
        // camera={{ position: [0, 0, 500] }}
        style={{ height: 400, width: 400 }}
      >
        <Suspense fallback={"Loading..."}>
          <Block />
          {/* <Text>hello world!</Text> */}
        </Suspense>
      </Canvas>
    </>
  );
}

//  ExperienceBlock;
