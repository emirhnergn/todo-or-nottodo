/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame, Object3DNode } from '@react-three/fiber'
import { Suspense } from 'react'
import { Stats, OrbitControls, Text, Html  } from '@react-three/drei'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { extend } from '@react-three/fiber'
import { easing, geometry } from 'maath'



function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>

      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}

const Octahedron = (props: JSX.IntrinsicElements['mesh']) =>
{
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      ref={ref}
      scale={0.2}
      rotation={[0,0,3.14/2]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>

      <coneGeometry args={[2, 5, 30]} />
      
      <meshStandardMaterial 
        color={'lightgreen'} />
      <meshPhysicalMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
        color={'lightgreen'} />
    </mesh>
  )
}

function WriteText(props: JSX.IntrinsicElements['group'] & { text: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <group {...props}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <planeGeometry args={[10,2,1]}/>
        <meshPhysicalMaterial 
        reflectivity={1}
        roughness={0}
        metalness={0.2}
        side={THREE.DoubleSide}
        color={'white'} 
        emissive={'blue'}/>
        <Html
          position={[0, 0.05, 0.009]} 
          occlude
          transform
          className="content">
          <div className="flex w-[400px] h-[80px] border-2 border-black overflow-y-auto">
            <p className='w-full text-[0.9vh] text-center text-ellipsis break-words'>{props.text}</p>
          </div>
        </Html>
      </mesh>
      
    </group>
  );
}


export default function Renderer() {
  return (
    <Canvas>
      <ambientLight intensity={0.7} color={'white'} />
      <directionalLight position={[5.5,  4, 0]} intensity={0.3} />
      <directionalLight position={[5.5, -4.5, 0]} intensity={1} />
      <spotLight position={[6, 2, 0]} intensity={1} />
      <pointLight position={[6,-1,2]} />
      <pointLight position={[3,0,3]} />
      <Box position={[-1.2, 2, 0]} />
      <Box position={[1.2, 2, 0]} />
      <Octahedron position={[6, 0, 0]}/>
      <OrbitControls enablePan={true} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      <WriteText position={[0, 0, 0]} text={"To-Do or Not-To-Do"} />
    </Canvas>
  )
}
