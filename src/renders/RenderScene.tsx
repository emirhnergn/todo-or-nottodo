/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, PerspectiveCamera} from '@react-three/drei'
import RenderTodos from './RenderTodos';

function Box(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-200,200);
  const yPos = THREE.MathUtils.randInt(-100,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos, yPos, zPos]}
      scale={props.scale}>

      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
      metalness={0.1}
      roughness={0.1}
      reflectivity={1}
      color={props.color} />
    </mesh>
  )
}

function Torus(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-200,200);
  const yPos = THREE.MathUtils.randInt(-100,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x += 0.002,
    ref.current.position.y -= 0.001,
    ref.current.position.z += -0.001
  ))

  return (
    <mesh
      {...props}
      position={[xPos, yPos, zPos]}
      ref={ref}
      scale={props.scale}>

      <torusGeometry args={[10, 3, 16,100]} />
      <meshPhysicalMaterial
      metalness={0.1}
      roughness={0.1}
      reflectivity={1}
      color={props.color} />
    </mesh>
  )
}

function TorusKnot(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-200,200);
  const yPos = THREE.MathUtils.randInt(-100,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x += -0.001,
    ref.current.position.y += 0.002,
    ref.current.position.z += -0.001
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos, yPos, zPos]}
      scale={props.scale}>

      <torusKnotGeometry args={[3, 2, 40,20]} />
      <meshPhysicalMaterial
      metalness={0.1}
      roughness={0.1}
      reflectivity={1}
      color={props.color} />
    </mesh>
  )
}

function Icosahedron(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-200,200);
  const yPos = THREE.MathUtils.randInt(-100,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x -= 0.001,
    ref.current.position.y += 0.001,
    ref.current.position.z += -0.002
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos, yPos, zPos]}
      scale={props.scale}>

      <icosahedronGeometry args={[5, 1]} />
      <meshPhysicalMaterial
      metalness={0.1}
      roughness={0.1}
      reflectivity={1}
      color={props.color} />
    </mesh>
  )
}

function Ring(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-200,200);
  const yPos = THREE.MathUtils.randInt(-150,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x += 0.002,
    ref.current.position.y += 0.002,
    ref.current.position.z += -0.001
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos, yPos, zPos]}
      scale={props.scale}>

      <ringGeometry args={[2, 6,7,8]} />
      <meshPhysicalMaterial
      metalness={0}
      roughness={0}
      reflectivity={1}
      color={props.color}/>
    </mesh>
  )
}

// Bugged
function Dodecahedron(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-150,150);
  const yPos = THREE.MathUtils.randInt(-150,150);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x = -0.001,
    ref.current.position.y = -0.002,
    ref.current.position.z += -0.002
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos,yPos,zPos]}
      scale={props.scale}>

      <dodecahedronGeometry args={[5,10]}/>
      <meshPhysicalMaterial
      metalness={0.1}
      roughness={0.1}
      reflectivity={1}
      color={props.color} />
    </mesh>
  )
}

function Camera(props: JSX.IntrinsicElements['group']) {
  const controlsRef = useRef<any>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useFrame(() => {
    controlsRef.current.update()
    cameraRef.current.updateProjectionMatrix()
  })

  return (
    <group {...props}>
      <PerspectiveCamera 
      ref={cameraRef}
      makeDefault
      args={[75, window.innerWidth / window.innerHeight, 0.1, 1000]}
      position={[0, 0, 6]}

      />
      <OrbitControls 
      mouseButtons={{LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE}}
      minDistance={6} maxDistance={30}
      ref = {controlsRef} camera={cameraRef.current}
      enableDamping dampingFactor={0.1}
      enablePan={true} enableZoom={true} 
      minAzimuthAngle={-Math.PI / 11} maxAzimuthAngle={Math.PI / 11}
      minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </group>
  )
}

const spawnRandomObject = (count : number) => {
  const randomObjects = []
  for (let i = 0; i < count; i++)
  {
    const color = Math.random() * 0xffffff;
    const randRotation = Math.floor(Math.random() * 3);
    const randRotationDelta = Math.random() * 0.01;
    const scale = THREE.MathUtils.randInt(1,10);
    const randObject = Math.floor(Math.random() * 4);
    switch (randObject)
    {
      case 0:
        randomObjects.push(<Box color={color} randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale} />)
      case 1:
        randomObjects.push(<Torus color={color}randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale/7} />)
      case 2:
        randomObjects.push(<TorusKnot color={color}randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale/7}/>)
      case 3:
        randomObjects.push(<Icosahedron color={color} randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale/5} />)
      case 4:
        randomObjects.push(<Ring color={color} randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale/5} />)
    }
  }
  return randomObjects;

}

export default function RenderScene(props : any) {

  return (
    <Canvas>
      <ambientLight intensity={0.9} color={'white'} />
      <directionalLight position={[5.5,  4, 0]} intensity={0.3} />
      <directionalLight position={[5.5, -4.5, 0]} intensity={1} />
      <directionalLight position={[-2, -4.5, 1]} intensity={0.5} />
      <directionalLight position={[0,20,5]} intensity={4} />
      <spotLight position={[6, 2, 0]} intensity={1} color={"red"}/>
      <pointLight position={[5,2,2]} intensity={5} color={"0xffffff"}/>
      <pointLight position={[-4,-8,1]} color={"lightblue"} intensity={5} />
      <pointLight position={[6,-1,2]} />
      <pointLight position={[3,0,3]} />
      {
        spawnRandomObject(60)
      }
      <Camera/>
      <RenderTodos/>
    </Canvas>
  )
}
