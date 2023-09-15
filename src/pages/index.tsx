
import Head from 'next/head'
import Renderer from '@/renders/Renderer'
import { useState, useEffect, useRef } from 'react'
import { useTodosStore, addTodo } from '@/stores/MainStore';

export default function Home() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const todos = useTodosStore();
  return (
    <div className='flex flex-row gap-1'>
        <Head>
          <title>To-Do or Not-To-Do BUT 3D</title>
        </Head>
        <div className='flex flex-col relative mx-auto mt-4 sm:w-2/4 w-3/4 md:h-[8rem] sm:h-[4rem] h-[8rem] rounded-lg pb-1 shadow-2xl'>
          <div className='absolute mx-1 h-full w-full bg-gradient-to-br from-lime-200 to-purple-200 opacity-50 rounded-lg'></div>
          <p className='text-sm md:text-2xl z-[1] text-center border-b-[1px] bg-lime-200/20 border-gray-800 md:w-1/2 w-full mx-auto'>To-Do or Not-To-Do BUT 3D</p>
          <textarea id="todo_textarea" ref={inputRef} className='mt-2 mx-1 z-[1] w-full h-full bg-gray-100 border-2 border-gray-100 rounded-lg p-1' placeholder={"Add To-Do or Not-To-Do..."} />
          <button ref={buttonRef} className='absolute md:w-[15%] sm:w-[10%] w-[15%] md:h-auto sm:h-6 h-auto bottom-0 md:text-base text-xs right-0 z-[1] bg-gray-200 hover:bg-gray-300 transition-all border-2 border-gray-800 rounded-lg md:p-1 m-1' onClick={e => {
            e.preventDefault();
            addTodo(inputRef?.current?.value || '');
            inputRef.current!.value = '';
          }}>Add</button>
        </div>
        <div id='root' className='absolute bg-gradient-to-br from-lime-300 to-purple-300 -z-[1] w-screen h-screen'>
          <Renderer todos={useTodosStore()}/>
        </div>
        <div className='absolute flex flex-col md:flex-row text-xs md:text-base w-1/2 md:w-fit h-fit right-0 mx-auto bg-gradient-to-br from-purple-200 to-lime-200 bottom-1  rounded-lg py-1 px-2 shadow-2xl'>
          <p className='text-center mx-auto'>Made by emirhanergn for SKYLAB Bootcamp.</p>
          <a href='https://github.com/emirhnergn/todo-or-nottodo' target='_blank' className='ml-2 text-blue-500 hover:text-blue-600 text-center border-gray-800 mx-auto'>Github Link</a>
        </div>
        <div className='absolute flex flex-col text-xs md:text-base w-1/2 md:w-fit h-fit left-0 bottom-1 mx-auto bg-gradient-to-br from-purple-100 to-lime-100 rounded-lg py-1 px-2 shadow-2xl'>
          <p className='text-center mx-auto'>Left mouse button to look around.</p>
          <p className='text-center mx-auto'>Right mouse button to rotate.</p>
          <p className='text-center mx-auto'>Middle mouse button to zoom in/out.</p>
        </div>
    </div>
  )
}
