import { useDispatch } from 'react-redux'
import { FaHeart } from "react-icons/fa";
import data from '/API/bouquet.json'
import { addIncart } from '../../slice/addTocartSlice';

export const FreshFlower = () => {
      const dispatch = useDispatch();

  return (
     <div className='flex justify-center para'>
      <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 p-10 '>
        {
          data.map((item)=>
          {
            return(
              <li key={item.id} className='max-w-50'>
                 <div className='max-w-50  border-b border-black pb-3 '>
                  <img src={item.img}alt="flower" className='h-60  w-50 ' />
                   <div className='mt-5 leading-8'>
                   <h1 className='font-bold text-xl md:text-2xl sm:text-xl lg:text-2xl text-center '>{item.title}</h1>
                   <p className='text-center'>Price: ${item.price} </p>
                  <div className='flex gap-4 justify-center'>
                   <button onClick={()=>
                   dispatch(
                    addIncart({
                        title:item.title,
                        img:item.img,
                        price:item.price,
                        id:item.id,
                        product:1
                        })
                      )
                     }>
                    Buy now
                   </button>
                   <FaHeart  className='text-3xl active:text-pink-100 ' />
                  </div>

                </div>
        </div>
              </li>
            )
          })
        }
      </ul>
       
    </div>
  )
}
