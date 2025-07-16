import React from 'react'
import "./Home.css"
export const CEO = () => {
  return (
     <>
     <section className='flex flex-col flex-wrap justify-center mt-20 person'>
       
          <div className='person flex self-center w-200 h-120 justify-self-center'>
          
            <div className=' w-140 text-sm/8 pt-10 pl-5 text-white font-semibold text-xl ' >
               <p className='pb-10 text-center text-4xl font-bold'>Person In Charge</p>
              <p className='pb-10'>
                      Hi, I’m Rina, the owner of Bunch & Blush– a small flower shop I started almost by chance. 
                     I’ve always loved flowers, but I never imagined turning that love into a business. One day
                     , I helped a friend decorate for a small event, and everyone loved the floral setup. That
                      moment sparked an idea, and within a few months, Bloomnest was born.Now, I spend my days 
                      surrounded by fresh blooms, creating simple and beautiful arrangements that bring joy to others – and to me too.
              </p>
            </div>
            <img src="/woman.png" alt="" className='w-100 h-120' />
          </div>
     </section>
     </>
  )
}

