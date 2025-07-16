import React from 'react'
import "./Home.css"
export const Growth = () => {
  return (
    <>
       <div className='mt-20'>
          <p className='text-5xl font-bold text-center mb-5 des '>A Quick Look at us</p>
          <div className='pl-10  flex justify-center justify-self-center flex-wrap gap-20  p-10   max-w-400'>
                <Counter type='Happy Customers ' number="200+"></Counter>
               <Counter type='Bouquets created' number="90+"></Counter>
               <Counter type='Years in business' number="2Y"></Counter>
               <Counter type='Special orders completed' number="110+"></Counter>
           </div>
       </div>
    </>
    
  )
}
const Counter=({type,number})=>
{
  return(
    <div className='w-45 rounded-xl text-center h-30 p-4 bg-white text-white person'>
      <p className='text-xl font-bold  '>{type}</p>
      <p className='text-xl   '>{number}</p>
    </div>
  )
}
