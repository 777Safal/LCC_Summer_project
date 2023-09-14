import React,{useRef,useState,useEffect} from 'react'

function Test5() {
    const name = useRef();
    const password = useRef();
    const age = useRef();
    const email = useRef();

    const handleSubmit =()=>{
        if(name.current.value&&password.current.value&&age.current.value&&age.current.value&&email.current.value){
            localStorage.setItem('name',name.current.value)
            localStorage.setItem('password',password.current.value)
            localStorage.setItem('age',age.current.value)
            localStorage.setItem('email',email.current.value)
            alert('account created succesfully!')
        }

    }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-1/4 flex flex-col items-center'>
            <div className='w-full grid grid-rows-4 gap-4'>
                <input type="text"
                 placeholder='Name' ref={name} className='px-2 py-1 outline-none rounded-sm'/>
                <input type="email" placeholder='Email' ref={email} className='px-2 py-1 outline-none rounded-sm'/>
                <input type="password" placeholder='Password' ref={password} className='px-2 py-1 outline-none rounded-sm'/>
                <input type="text" 
                placeholder='Age' ref={age} className='px-2 py-1 outline-none rounded-sm'/>
            </div>
            <button className='mt-4 w-fit px-5 py-2 bg-red-600 hover:bg-amber-400 text-amber-300 hover:text-red-600 rounded-sm'
            onClick={()=>{handleSubmit()}} 
            >signin</button>
        </div>
    </div>
  )
}

export default Test5