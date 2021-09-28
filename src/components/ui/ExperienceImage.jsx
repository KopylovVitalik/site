import * as THREE from "three";
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
// import PropTypes from "prop-types";

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  // { transparent: true },
  // Vertex Shader
  glsl`
    precision mediump float;
    // precision highp float;
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 1.5;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;
      // if (uWave == 0.0) { vec3 pos = position; }
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;
    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;
    varying float vWave;
    
    void main() {
      // float wave = vWave * 0.8;
      float t = texture2D(uTexture, vUv).a;
      if (t < 0.01) { discard; }
      // if (t < 0.01) { 
      //   gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); 
      //   return;
      // }
      // vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      vec3 texture = texture2D(uTexture, vUv).rgb;
      gl_FragColor = vec4(texture, 1.0); 
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = ({ image }) => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [img] = useLoader(THREE.TextureLoader, [image]);

  // material.transparent = true;

  return (
    <mesh>
      <planeBufferGeometry args={[0.6, 1, 16, 16]} />
      <waveShaderMaterial
        ref={ref}
        uColor={"hotpink"}
        uTexture={img}
        transparent={true}
        depthTest={false}
      />
    </mesh>
  );
};

const ExperienceImage = ({ image, wave }) => {
  return (
    <Canvas
      camera={{ fov: 12, position: [0, 0, 5] }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Wave image={image} />
      </Suspense>
    </Canvas>
  );
};

ExperienceImage.defaultProps = {
  wave: false,
};

export default ExperienceImage;
