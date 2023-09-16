import React from 'react'
import * as THREE from 'three'
import { useState, useRef, useEffect } from 'react';
import { removeTodo,removeOrder,useOrderStore,useTodosStore, addOrder } from '@/stores/MainStore';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';


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
              <button className='absolute left-1 w-[5%] z-[1] h-[80%] bg-red-200/40 hover:bg-red-300/60 transition-all border-2 border-gray-800 rounded-lg px-1 m-1' onClick={e => {
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
  
const deleteTodo = (key:string) => {
    const removeTodoLocal = removeTodo;
    const removeOrderLocal = removeOrder;

    removeTodoLocal(key);
    removeOrderLocal(key);

}
export default function RenderTodos() {
    const [elements, setElements] = useState<JSX.Element[]>([]);
    const [firstLoad, setFirstLoad] = useState(true);
    const groupRef = useRef<THREE.Group>(null!);
    const order = useOrderStore();
    const todos = useTodosStore();
  
    const addOrderLocal = addOrder;
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
          const delay = (index + 1) * 200; 
          //const delay = 0;
          addTodoToRender(key, todos[key], index, delay);
        });
      }, [todos]);

    return (
        <group ref={groupRef}>
            {elements}
        </group>
    )
}
