import React from 'react'
import {motion} from 'framer-motion'
import { Navigate,useNavigate } from 'react-router-dom';
import logo from '../../Image/monalisaNObg.png'

function DashBord() {
    const navigate = useNavigate() ;

    const handleClick=()=>{
        navigate('../');
    }
  return (
    <div className='w-10/12 mx-auto py-2 flex justify-between items-center'>
        <div className='flex items-center'>
        <div className='w-20 h-20 mr-2 rounded-ful' style={{
                    backgroundImage:`url(${logo})`,
                    backgroundSize:'cover'
                }}></div>
        <h1 className='ml-2 text-lg font-medium'>Admin Board</h1>
        </div>
        <motion.button 
            whileHover={{scale:1.3}}
            transition={{duration:0.1}}
            className='px-3 py-2 h-fit text-left rounded-lg bg-red-600 text-white cursor-pointer mr-3'
            onClick={handleClick}
            >Logout</motion.button>
    </div>
  )
}

export default DashBord