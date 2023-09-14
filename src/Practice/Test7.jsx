import React from 'react'
import {RiCloseFill} from 'react-icons/ri'

const Test7 =({isVisible,onClose})=> {
    if (!isVisible) return null;
  return (
    <div className='flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-xl fixed inset-0 '>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}><RiCloseFill/></button>
            <div className='bg-white p-2 rounded-sm'>Modal</div>
        </div>
    </div>
  )
}

export default Test7