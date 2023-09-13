
import Head from 'next/head'
import Renderer from '@/renders/Renderer'

export default function Home() {


  return (
    <div className='flex flex-row gap-1'>
        <Head>
          <title>To-Do or Not-To-Do</title>
        </Head>
        <div >
          hi
        </div>
        <div id='root' className='absolute bg-gradient-to-br from-lime-200 to-purple-200 -z-[1] w-screen h-screen'>
          <Renderer/>
        </div>
        
        

    </div>
  )
}
