import React,{useState,useEffect,useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Test4() {
    
    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const localSignup = localStorage.getItem('')
    const handleClick=()=>{
    if(email === 'safal@gmail.com' && password === '1234567'){
      navigate('../test1');
      
    }else if(email === 'admin@gmail.com' && password === 'admin123'){
      navigate('../test2');
    }
    else{
      alert('invalid email id or password');
    }
    }
    

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white h-screen flex justify-center items-center'>
      <div className='w-9/12 h-4/5 overflow-hidden rounded-lg shadow-2xl flex flex-row'>
        <div className='bg-white w-2/5 h-full flex flex-col items-center shadow-2xl '>
            <div className='mt-4'>
                        {/* logo */}
                        <div className='w-32 h-32 rounded-ful'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREV7OqbWAYbL_nNEO2AFXJRwOvvTD-I4MwXMgZjnsb2A&s"  />
                        </div>
                        <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
                    </div>
            <div className='w-9/12 mt-3 flex flex-col justify-center'>
              <div className='h-20 flex flex-col'>
                <label className='text-base text-red-700  font-semibold'>User Id</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
                className='h-9 rounded-2xl bg-yellow-100 mt-1 placeholder:text-black p-4 text-sm outline-none'/>
              </div>
              <div className='h-20 flex flex-col'>
                <label className='text-base text-red-700  font-semibold'>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                className='h-9 rounded-2xl bg-yellow-100 mt-1 placeholder:text-black p-4 text-sm outline-none'/>
              </div>
              
                <button type='submit'
                className='bg-yellow-200 text-red-500 hover:bg-red-500 hover:text-yellow-200 rounded-2xl text-lg font-bold mt-3 py-2 w-44 mx-auto '
                onClick={handleClick}>
                    Login
                </button>

                <div className='grid grid-cols-2 mt-4'>
                                    <button className='text-left text-xs'>Forgot Password ?</button>
                                    <button 
                                    className='text-right text-xs'>
                                      <Link to='newaccount'>create new account</Link>
                                    </button>
                                </div>
              
            </div>
          </div>
          
        <div className='w-3/5 h-full relative bg-center bg-cover bg-no-repeat bg-[url(https://img.freepik.com/premium-vector/football-soccer-splash-silhouette_9245-677.jpg?size=626&ext=jpg)]'>

        </div>

      </div>
  
         

    </div>
  )
}

export default Test4