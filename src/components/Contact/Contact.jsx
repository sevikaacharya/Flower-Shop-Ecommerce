import React, { useState } from 'react'

export const Contact = () => {
  const[name,setName]=useState("");
  const[Email,setEmail]=useState("");
  const[msg,setMsg]=useState("");
  const[err,setErr]=useState("");
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkValidation=(e)=>
  {
      e.preventDefault();
       if(nameRegex.test(name.trim()) && emailRegex.test(Email.trim())&& msg.length>=10)
       {
           setErr("Form Submitted Sucessfull");
           setEmail('')
           setMsg('')
           setName('')
         
           
       }
      else if(name.length==0 && Email.length==0 && msg.length==0){
        setErr("Please fill all the field above ")
       }
       else{
        setErr("Make sure  form you have filled is Valid and Msg is long")
       }
     
  }
  return (
    <>
         <div className='pt-10'>
            <div className='flex flex-col items-center para'>
                <h1 className='text-4xl font-bold mt-4 mb-5'>Contact Us</h1>
                <p className=''>Have a question, want to place a custom order or just say hello ? We'd love to hear from you !</p>
              <div>
               <div className='mt-8 mb-10'>
                 <h1 className='text-xl mb-7'>Shop Information</h1>
                 <p><strong>Shop Name:</strong> Blush & Bunch</p>
                 <p><strong>Location:</strong> Savannah, Georgia, USA </p>
                 <p><strong>Phone:</strong> +1 (912) 555-2389 </p>
                 <p><strong>Email:</strong> bbflower20@gmail.com</p>
                 <p><strong>Hours:</strong> Monday-Saturday| 9:00 AM- 6:00 PM</p>
               </div>

               <div>
                   <form action="" onSubmit={checkValidation}>
                       <label htmlFor="Name">Your name</label> <br />
                       <input type="text" placeholder='Enter your name' className='border w-150 mb-5 h-10 pl-4' onChange={(e)=>setName(e.target.value)} value={name} /> <br />
                        <label htmlFor="Email">Email</label> <br />
                         <input type="text" placeholder='Enter your email' className='border w-150 mb-5 h-10 pl-4 '  onChange={(e)=>setEmail(e.target.value)} value={Email}   /> <br />
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="message" id="message" placeholder='Write your message' className='border w-150 h-30 pl-4'  onChange={(e)=>setMsg(e.target.value)} value={msg} ></textarea> <br />
                        <input type="Submit" className=' w-29 h-10 mt-5 ftr text-white rounded mb-10' />
                    </form>
                    <p>{err}</p>
               </div>
              </div>
            </div>
         </div>
    </>
  )
}
