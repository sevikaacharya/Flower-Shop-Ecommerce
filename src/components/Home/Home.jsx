import React from 'react'
import "./Home.css"
import { Services } from './Services'
import { Growth } from './Growth'
import { CEO } from './CEO'
import { Work } from './Work'
export const Home = () => {
  return (
    <>
     <div>
        <section className='flex flex-col justify-center px-4 px-10 box items-center'>
            <div className=' flex flex-col lg:flex-row hero  w-full h-200 m-7 max-w-6xl gap-10 items-center'>
                <div className='mt-10 lg:mt-15'>
                    <img src="/bouu.png" alt="" className='w-120 sm:w-100 md:w-120 lg:w-150 h-auto rotate-30' />
                </div>
                <div className=' des  flex flex-col self-center text-center lg:text-left'>
                     <h1 className='text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold w-full lg:w-160 text-center'>Welcome to Bunch <br /> & <br /> Blush</h1>
                     <p className='text-xl sm:text-lg md:text-xl  font-light text-center mt-6 lg:mt-10'>Let flowers do the talking — shop your favorites today!</p>
                     <button  className=' w-30 h-10 self-center mt-10 rounded-xl btn'>Shop</button>
                </div>
            </div>
        </section>
        <Work></Work>
        <CEO></CEO>
          <Growth></Growth>
        <Services></Services>
     

     </div>
    </>
  )
}
