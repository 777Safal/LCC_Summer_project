import React,{useState} from 'react'
import Test7 from './Test7'

function Test6() {

    const [showModal,setShowModal]=useState(false);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1>creating custom a model </h1>
        <div>
            <button className='px-4 py-2 bg-blue-400 text-slate-50 outline-none '
            onClick={()=>{setShowModal(true)}}>hellow</button>
            <button className='px-4 py-2 bg-amber-400 text-slate-50 outline-none '>hellow</button>
            <button className='px-4 py-2 bg-slate-800 text-slate-50 outline-none '>hellow</button>
            
        </div>
        <Test7 isVisible={showModal} onClose={()=>{
            setShowModal(false)
        }}/>
    </div>
  )
}

export default Test6