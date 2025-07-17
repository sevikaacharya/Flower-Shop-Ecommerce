import React from 'react'

export const Bookus = () => {
  return (
    <div className='flex justify-self-center para mt-20 leading-10 text-center'>
        <div className=''>
            <h1 className=' text-4xl font-bold mb-5'>Book Us</h1>
            <p className=' text-sm sm:text-sm md:text-md lg:text-xl'>Make Every Occasion Bloom With Beauty</p>
            <p className='text-sm sm:text-sm md:text-md lg:text-xl'>Planning a special event or surprise? Whether it’s a wedding, anniversary, birthday, or corporate gathering — let us design the perfect floral experience for you.</p>
            <p className=' mt-5 font-bold'>What We Offer:</p>
             <ul className='border-b text-sm sm:text-sm md:text-md lg:text-md '>
                <li>Custom floral arrangements for all events</li>
                <li>On-time delivery and setup</li>
                <li>Personalized consultations to match your theme and style</li>
             </ul>
             <p className='font-bold text-sm sm:text-sm md:text-md lg:text-xl mt-10'>✨ Let flowers speak your feelings — effortlessly and beautifully.</p>
             <form action="" className='mt-10'>
                <input type="date" className='ftr text-white p-1 mr-10 rounded' /> 
                <button className='ftr text-white w-30 h-12 rounded-2xl font-bold '>Book Us</button>
             </form>
        </div>
    </div>
  )
}
