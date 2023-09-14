/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, Object3DNode, useThree } from '@react-three/fiber'
import { Suspense } from 'react'
import { Stats, OrbitControls, Text, Html, OrbitControlsProps, PerspectiveCamera, useScroll, OrthographicCamera  } from '@react-three/drei'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { extend } from '@react-three/fiber'
import { easing, geometry } from 'maath'
import { useTodosStore, removeTodo, useOrderStore,removeOrder, addOrder, addTodo } from '@/stores/MainStore';



function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (
    ref.current.rotation.x += 0.01,
    clicked && ref.current.visible ? ref.current.visible = false : null
    ))

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

const Octahedron = (props: JSX.IntrinsicElements['mesh'] & {orderKey: any}) =>
{
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  useFrame(() => {
    if (ref.current.position.x > 6)
    {
      ref.current.position.x -= 1
    }
  })

  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      ref={ref}
      scale={0.2}
      rotation={[0,0,3.14/2]}
      position={[46, -2.2 * props.orderKey, 0]}>
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

function WriteText(props: JSX.IntrinsicElements['group'] & {text: string, orderKey: any}) {
  const order = useOrderStore();
  const todos = useTodosStore();
  const ref = useRef<THREE.Group>(null!);
  
  useFrame(() => {
    if (ref.current.position.x < 0)
    {
      ref.current.position.x += 1
    }
    Object.keys(todos).includes(props.orderKey) ? null : ref.current.position.y = 10000;
  })


  return (
    <group ref={ref} {...props} position={[-40, -2.2 * order[props.orderKey], 0]}>
      <mesh>
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
          className="content opacity-0">
          <div className="flex w-[400px] h-[80.5px] border-2 border-black overflow-y-auto">
            <button className='w-[5%] h-[90%] bg-red-200 hover:bg-red-300 transition-all border-2 border-gray-800 rounded-lg p-1 m-1' onClick={e => {
              e.preventDefault();
              deleteTodo(props.orderKey);
            }}>X</button>
            <p className='m-auto p-1 h-fit text-[0.9vh] text-center align-middle text-ellipsis break-words'>{props.text}</p>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

const deleteTodo = (key:string) => {
  const removeTodoLocal = removeTodo;
  const removeOrderLocal = removeOrder;

  removeTodoLocal(key);
  removeOrderLocal(key);

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
      position={[0, 0, 12]}

      />
      <OrbitControls 
      mouseButtons={{LEFT: THREE.MOUSE.PAN, MIDDLE: THREE.MOUSE.ROTATE, RIGHT: THREE.MOUSE.ROTATE}}
      minDistance={12} maxDistance={30}
      ref = {controlsRef} camera={cameraRef.current}
      enableDamping dampingFactor={0.1}
      enablePan={true} enableZoom={true} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </group>
  )
}



export default function Renderer(props : any) {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const order = useOrderStore();
  const todos = useTodosStore();

  const addOrderLocal = addOrder;
  const addTodoLocal = addTodo;

  useEffect(() => {
    const addTodoToRender = (key:string, text:string, index:number, delay:number) => 
    {
      (order[key] == undefined || firstLoad) &&
      (
      setFirstLoad(false),
      addOrderLocal(key, index),
      setTimeout(() => 
      {
        setElements((elements) => [
          ...elements,
          (
            <group key={index}>
              <WriteText orderKey={key} text={text} />
              <Octahedron orderKey={key}/>
            </group>
          )
        ])
      }, delay))
    };

    Object.keys(todos).forEach((key:string, index) => {
      const delay = (index + 1) * 200; 
      addTodoToRender(key, todos[key], index, delay);
    });
  }, [todos]);

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
      <Camera/>
      {
        elements
      }
    </Canvas>
  )
}
