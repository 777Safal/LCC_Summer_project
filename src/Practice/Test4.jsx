import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom';

function Test4() {
    
    const navigate = useNavigate();
    const name = useRef();
    const password = useRef();



  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-1/4 mx-auto grid grid-rows-2 gap-4'>
            <input type="text" placeholder='Name' ref={name}
            className='px-2 py-1 outline-none'/>
            <input type="password" placeholder='Password' ref={password}
            className='px-2 py-1 outline-none'/>
        </div>


        
         <button 
         className='mt-10 px-4 py-2 bg-red-600 hover:bg-amber-300 text-amber-300 hover:text-red-600 '
         onClick={()=>{
            navigate('../Test1');
         }}>
            Login
         </button>

    </div>
  )
}

export default Test4