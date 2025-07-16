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
        <section className='flex justify-center box'>
            <div className=' flex hero  w-400 h-200 m-7'>
                <div className='mt-15'>
                    <img src="/bouu.png" alt="" className='w-200 h-180 rotate-30' />
                </div>
                <div className=' des  flex flex-col self-center'>
                     <h1 className='text-7xl font-bold w-160 text-center'>Welcome to Bunch <br /> & <br /> Blush</h1>
                     <p className='text-xl font-light text-center mt-10'>Let flowers do the talking — shop your favorites today!</p>
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
