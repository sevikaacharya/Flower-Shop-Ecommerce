import React from 'react'

export const Customize = () => {
  return (
    <div className='mt-20 h-180 ftr text-white  '>
     <h1 className='text-center text-4xl font-bold pb-20 pt-10'>Customize Your Bouquet</h1>
     <div className='flex justify-self-center gap-6'>
        <div>
           <Title head='Choose Your Flowers'
            des='Pick from a variety of fresh flowers like roses, lilies, tulips
                , and more. Mix and match your favorites to create a bouquet 
                that’s truly your'
           />
           <Title head='Select Colors & Style'
           des='Customize the color of each flower and choose from elegant wrapping
            styles, ribbons, and decorative fillers to match any mood or occasion'/>
           <Title head='Add a Personal Touch'
           des='Include a heartfelt message with your bouquet, choose the delivery date
           , and make your gift extra special with personalized notes or packaging.'
           />
        </div>
        <img src="./customize.jpg" alt="" className='h-122  w-105' />
     </div>
        
    </div>
  )
}
const Title=({head,des})=>
{
    return(
        <div className='max-w-lg border-b mb-10 p-3 h-34'>
            <h1 className='text-2xl font-bold mb-2'>{head}</h1>
            <p className='text-md'>{des}</p>
        </div>
    )
}
