import React from 'react'
import "./Home.css"
export const CEO = () => {
  return (
     <>
     <section className='flex flex-row  justify-center mt-20 person md:px-10 overflow-hidden '>
       
          <div className='person flex flex-row self-center w-full h-auto items-center justify-center flex-wrap'>
          
            <div className=' pt-4 w-140 text-sm/8  pl-5 text-white font-semibold text-xl ' >
               <p className='pb-10 text-center text-4xl md:text-4xl font-bold'>Person In Charge</p>
              <p className=' text-md text-justify'>
                      Hi, I’m Rina, the owner of Bunch & Blush– a small flower shop I started almost by chance. 
                     I’ve always loved flowers, but I never imagined turning that love into a business. One day
                     , I helped a friend decorate for a small event, and everyone loved the floral setup. That
                      moment sparked an idea, and within a few months, Bloomnest was born.Now, I spend my days 
                      surrounded by fresh blooms, creating simple and beautiful arrangements that bring joy to others – and to me too.
              </p>
            </div>
            <img src="/woman.png" alt="" className='w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain' />
          </div>
     </section>
     </>
  )
}

