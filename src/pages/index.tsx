
import Head from 'next/head'
import Renderer from '@/renders/Renderer'
import { useState, useEffect } from 'react'
import { useTodosStore, addTodo } from '@/stores/MainStore';

export default function Home() {
  const [input, setInput] = useState('');

  const todos = useTodosStore();
  return (
    <div className='flex flex-row gap-1'>
        <Head>
          <title>To-Do or Not-To-Do</title>
        </Head>
        <div className='flex flex-col relative mx-auto mt-4 md:w-2/4 w-3/4 h-[8rem] rounded-lg pb-1 shadow-2xl'>
          <div className='absolute mx-1 h-full w-full bg-gradient-to-br from-lime-200 to-purple-200 opacity-50 rounded-lg'></div>
          <p className='text-2xl z-[1] text-center border-b-[1px] border-gray-800 w-1/2 mx-auto'>To-Do or Not-To-Do</p>
          <textarea className='mt-2 mx-1 z-[1] w-full h-full bg-gray-100 border-2 border-gray-100 rounded-lg p-1' placeholder={"Add To-Do or Not-To-Do..."} value={input} onChange={e => setInput(e.target.value)} />
          <button className='absolute w-[15%] bottom-0 right-0 z-[1] bg-gray-200 hover:bg-gray-300 transition-all border-2 border-gray-800 rounded-lg p-1 m-1' onClick={e => {
            e.preventDefault();
            addTodo(input);
            setInput('');
          }}>Add</button>
        </div>
        <div id='root' className='absolute bg-gradient-to-br from-lime-200 to-purple-200 -z-[1] w-screen h-screen'>
          <Renderer todos={useTodosStore()}/>
        </div>
    </div>
  )
}
