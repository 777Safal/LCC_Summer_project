import React,{useRef,useEffect,useState} from 'react'
import Test1 from './Test1';


function Test3() {
  const name = useRef();
  const Age = useRef();
  const email = useRef();
  const password = useRef();

  const [showHome,setShowHome]= useState(false)
  const localSignup = localStorage.getItem('signUp')
  useEffect(() => {
    if(localSignup){
      setShowHome(true);
    }
  }, [])
  

  const handleClick=()=>{
    
    if(name.current.value&&Age.current.value&&email.current.value&&password.current.value){
      localStorage.setItem('name',name.current.value)
      localStorage.setItem('age',Age.current.value)
      localStorage.setItem('email',email.current.value)
      localStorage.setItem('password',password.current.value)
      localStorage.setItem('signup',email.current.value)
      alert('Account creted succesfully!')
      window.location.reload()
    }
    
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      {showHome? '':<Test1/>}
        <div className='w-2/4 py-5 shadow-lg'>
          <div className='w-2/4 mx-auto grid grid-rows-4 gap-2'>
            <input type="text" placeholder='Name' ref={name} className='w-full px-2 py-2 outline-none shadow-sm bg-yellow-100 rounded-md placeholder-zinc-700' />
            <input type="number" placeholder='Age' ref={Age} className='w-full px-2 py-2 outline-none shadow-sm bg-yellow-100 rounded-md placeholder-zinc-700'/>
            <input type="email" placeholder='Email' ref={email} className='w-full px-2 py-2 outline-none shadow-sm bg-yellow-100 rounded-md placeholder-zinc-700'/>
            <input type="password" placeholder='Passwrd' ref={password} className='w-full px-2 py-2 outline-none shadow-sm bg-yellow-100 rounded-md placeholder-zinc-700'/>
            <button 
            onClick={handleClick}
            className="w-fit mx-auto px-5 py-2 mt-3 bg-yellow-200 text-red-600 font-semibold text-lg hover:text-yellow-400 hover:bg-red-600 rounded-md ">Signup</button>
          </div>
        </div>
    </div>
  )
}

export default Test3