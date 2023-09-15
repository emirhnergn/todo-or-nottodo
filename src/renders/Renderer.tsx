/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, PerspectiveCamera} from '@react-three/drei'
import { useTodosStore, removeTodo, useOrderStore,removeOrder, addOrder, addTodo } from '@/stores/MainStore';



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
    ref.current.position.x += 0.01,
    ref.current.position.y -= 0.01,
    ref.current.position.z += -0.01
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
    ref.current.position.x += -0.01,
    ref.current.position.y += 0.01,
    ref.current.position.z += -0.01
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
    ref.current.position.x -= 0.01,
    ref.current.position.y += 0.01,
    ref.current.position.z += -0.01
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
    ref.current.position.x += 0.01,
    ref.current.position.y += 0.01,
    ref.current.position.z += -0.01
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

function Dodecahedron(props: JSX.IntrinsicElements['mesh'] & 
  {color : string|number,
  randRotationDelta : number, randRotation : number,
  scale : number
  }) {
  const ref = useRef<THREE.Mesh>(null!)
  const xPos = THREE.MathUtils.randInt(-100,100);
  const yPos = THREE.MathUtils.randInt(-100,100);
  const zPos = THREE.MathUtils.randInt(-200,-50);

  useFrame((state, delta) => (
    props.randRotation == 0 ? ref.current.rotation.x += props.randRotationDelta : null,
    props.randRotation == 1 ? ref.current.rotation.y += props.randRotationDelta : null,
    props.randRotation == 2 ? ref.current.rotation.z += props.randRotationDelta : null,
    ref.current.position.x = -0.01,
    ref.current.position.y = -0.01,
    ref.current.position.z += -0.01
  ))

  return (
    <mesh
      {...props}
      ref={ref}
      position={[xPos, yPos, zPos]}
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

const Octahedron = (props: JSX.IntrinsicElements['mesh'] & {orderKey: any}) =>
{
  const order = useOrderStore();
  const todos = useTodosStore();
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  useFrame(() => {
    if (ref.current.position.x > 6)
    {
      ref.current.position.x -= 1
    }
    Object.keys(todos).includes(props.orderKey) ? null : ref.current.position.y = 10000;
  })

  return (
    <mesh
      {...props}
      castShadow
      receiveShadow
      ref={ref}
      scale={0.2}
      rotation={[0,0,3.14/2]}
      position={[46, -1.6 * (order[props.orderKey] -1), 0]}>
      <coneGeometry args={[2, 5, 30]} />
      <meshStandardMaterial 
        color={'lightgreen'} />
      <meshPhysicalMaterial
        clearcoat={1}
        clearcoatRoughness={0}
        reflectivity={1}
        metalness={0.2}
        roughness={0}
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
    <group ref={ref} {...props} position={[-40, -1.6 * (order[props.orderKey] -1), 0]}>
      <mesh>
        <planeGeometry args={[10,1.5,1]}/>
        <meshPhysicalMaterial
        reflectivity={1}
        roughness={0}
        metalness={0.2}
        side={THREE.DoubleSide}
        color={'gray'} 
        emissive={'white'}/>
        <Html
          position={[0, 0.05, 0.009]} 
          occlude
          transform
          className="content">
          <div className="flex w-[400px] h-[61px] mt-[2px] border-2 border-black overflow-y-auto">
            <button className='absolute left-1 w-[5%] h-[80%] bg-red-200/40 hover:bg-red-300/20 transition-all border-2 border-gray-800 rounded-lg px-1 m-1' onClick={e => {
              e.preventDefault();
              deleteTodo(props.orderKey);
            }}>X</button>
            <p className='absolute m-auto px-1 h-fit w-full text-[1rem] text-center align-top text-ellipsis break-words'>To-Do-{order[props.orderKey]+1}</p>
            <p className='m-auto px-1 h-fit text-[0.5rem] text-center align-middle text-ellipsis break-words'>{props.text}</p>
          </div>
        </Html>
      </mesh>
    </group>
  );
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
      minAzimuthAngle={-Math.PI / 5} maxAzimuthAngle={Math.PI / 5}
      minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </group>
  )
}

const deleteTodo = (key:string) => {
  const removeTodoLocal = removeTodo;
  const removeOrderLocal = removeOrder;

  removeTodoLocal(key);
  removeOrderLocal(key);

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
      case 5:
        randomObjects.push(<Dodecahedron color={color} randRotation={randRotation} randRotationDelta={randRotationDelta} scale={scale/10} />)
    }
  }
  return randomObjects;

}


export default function Renderer(props : any) {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const groupRef = useRef<THREE.Group>(null!);
  const order = useOrderStore();
  const todos = useTodosStore();

  const addOrderLocal = addOrder;
  const addTodoLocal = addTodo;

  useEffect(() => {
    Object.keys(order).length === 0 && (setElements([]), setFirstLoad(true));
  }, [todos]);

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
            <group>
              <WriteText orderKey={key} text={text} />
              <Octahedron orderKey={key}/>
            </group>
          )
        ])
      }, delay))
    };

    Object.keys(todos).forEach((key:string, index) => {
      //const delay = (index + 1) * 200; 
      const delay = 0;
      addTodoToRender(key, todos[key], index, delay);
    });
  }, [todos]);

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
        spawnRandomObject(50)
      }
      <Camera/>
      {
        <group ref={groupRef}>
          {elements}
        </group>
      }
    </Canvas>
  )
}
