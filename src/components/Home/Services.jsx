import React from 'react'
import "./Home.css"
import {motion} from "framer-motion"
export const Services = () => {
  return (
    <section className='pt-10 mt-20'>
        <div>
          <h1 className='heading text-5xl font-bold  text-center'>Services</h1>
            
           <div className='flex flex-wrap gap-10 justify-center mt-10 text-center'>
            <Work d={2.4} x={100} title={"Fresh Flower Arrangements"} 
            image={"/fresh.jpg"}
            des={"Custom or pre-designed bouquets for any occasion — birthdays, anniversaries, get-wells, or just to brighten someone’s day."}/>
            <Work d={1.6} x={200} title={" Event Floral Decoration"}
             image={"/baby.jpg"}
            des={"Full floral decor service for events like weddings, birthdays, baby showers, engagements, and corporate events."}/>
            <Work d={0.8} x={300} title={"Wedding Floral Services"} 
             image={"/wedding.jpg"}
            des={"Special floral packages for weddings including bridal bouquets, garlands (phool mala), car decor, mandap design, and aisle flowers."}/>
            <Work d={0} x={400} title={" Customized Bouquets"}
             image={"/bouque.jpg"}
            des={"Create your own bouquet by selecting specific flowers, colors, wrapping styles, and message cards"}/>
           </div>
        </div>
    </section>
  )
}
 
const Work=({title,des,x,d,image})=>
{
    return(
         <>
          <motion.div
          initial={{opacity:0,x:-x}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:3, delay:d}}
          viewport={{once:true}}
          className='box1 rounded-xl  w-full max-w-xs break-words break-all min-h-36 p-4 '
          >
            <h1 className='text-xl font-bold pb-3'>{title}</h1>
            <img src={image} alt="img" className='h-80 w-full max-w-xs pb-5 ' />
            <p className='text-md font-semibold' >{des}</p>
          </motion.div>
         </>
    )
}