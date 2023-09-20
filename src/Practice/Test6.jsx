import React,{useState} from 'react'

function Test6() {
  const [onClicked,setOnClicked]=useState(false);
  const handleClick=()=>{
    setOnClicked(true);
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <button className={`${onClicked ? 'bg-slate-50' : 'bg-blue-200'} px-4 py-2`} onClick={handleClick}>hello</button>
      <button className='px-4 py-2 bg-lime-300'>hellow</button>
      <button className='px-4 py-2 bg-fuchsia-300'>hellow</button>
    </div>
  )
}

export default Test6