import React, { useEffect, useState } from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { handleTotalde ,handleTotalIn,removeItem} from '../../slice/addTocartSlice'
export const Cart = () => {
  const addIntable=useSelector((state)=>state.itemsInCart.items)
  const[total,setTotal]=useState(0)
  const dispatch = useDispatch()


  useEffect(()=>
  {
     const sum=addIntable.reduce((total,item)=>total+item.price,0)
     setTotal(sum)
  },[addIntable])
  return (
    <>
      <div className=' mt-20 border flex  justify-self-center ftr text-white'>
           <div className='flex   table-fixed '>
           <table className='text-center w-200  '>
             <thead className=' border-b'>
              <th></th>
              <th>Name of the item</th>
              <th>image</th>
              <th>price</th>
             </thead>
            {
              addIntable.map(item => (
              <tbody className='border-b '>
               <td onClick={()=>dispatch(removeItem({id:item.id}))}>delete</td>
               <td className='py-4'>{item.title}</td>
               <td className='py-4'><img src={item.img} className='w-20 flex justify-self-center' /></td>
                <td className='py-4'>${item.price}</td>
                <td><button onClick={()=>{ dispatch(handleTotalde({id:item.id}))}}>-</button> {item.product} <button onClick={()=>{ dispatch(handleTotalIn({id:item.id}))}}> +</button> </td>

             </tbody>
          
             ))
            }
         
          
          </table>
      </div>
       <div className='ml-10 mr-20'>
           <div className=' mb-10'>
               <h1 className='text-center text-2xl font-semibold mb-4 underline '>Summary</h1>
               <div className='leading-7'>
               <p>Subtotal: <span>${total}</span></p>
               <p>Shipping: <span>$10</span></p>
                <p>Total Price: <span>${total+10}</span></p>
             </div>
          </div>
          <div>
            <h1 className='text-center text-2xl font-semibold mb-4 underline'>Payment Info</h1>
           <div className='mb-10'>
            <h2 className='font-bold'>Payment Method</h2>
             <input type="radio" name='payment' />
             <label htmlFor="COD">COD</label> <br />
             <input type="radio" name='payment' />
             <label htmlFor="Paypal">Paypal</label>
           </div>
            <div >
               <h1 className='mb-4 font-bold'> Delivery Information</h1>
               <input type="text" placeholder='Enter Your Name' className='border-b' /> <br /> <br />
               <input type="text" placeholder='Phonenumber' className='border-b' /> <br /> <br />
               <input type="text" placeholder='Delivery Place' className='border-b' />
            </div>
              <button className='border bg-white para mt-6 mb-7 w-30 h-10 rounded-2xl'>Check Out</button>
          </div>
       </div>
    </div>
    </>
  )
}
