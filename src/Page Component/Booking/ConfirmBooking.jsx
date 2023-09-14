import React,{useRef} from 'react'
import {RiCloseFill} from 'react-icons/ri'

const  ConfirmBooking=({isVisible,onClose})=> {
  
  const handleColse=(e)=>{
    if(e.target.id === 'wrapper') onClose();
  }

  if (!isVisible) return null;
  return (
      <div id='wrapper' className='fixed z-50 inset-0 flex justify-center items-center bg-transparent backdrop-blur-xl ' onClick={handleColse}>
        <div className='w-2/5 h-2/6 flex flex-col '>
        <button className='text-black text-xl place-self-end' onClick={()=>onClose()}><RiCloseFill/></button>
          <div className='w-full h-full flex flex-col items-center justify-center rounded-md shadow-xl bg-gradient-to-b from-yellow-200 to-white flex flex-col items-center'>
            <h1>Do you want to book a court?</h1>
            <div className='my-5 grid grid-cols-2 gap-5'>
              <button className='px-5 py-2 bg-slate-100 outline-none rounded-sm text-sm hover:bg-red-600 hover:text-amber-300'>Yes</button>
              <button className='px-4 py-2 bg-slate-100 outline-none rounded-sm text-sm hover:bg-red-600 hover:text-amber-300' 
              onClick={()=>onClose()}>No</button>
            </div>
            <div className='px-5 flex '>
            <span className='mr-2 text-red-600'>Note:</span> 
            <p className='text-sm tracking-wide'>You need to make either 40% advance payment which is Rs.520 or full payment Rs.1300 through khalti.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ConfirmBooking