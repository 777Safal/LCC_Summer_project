import React,{useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import logo from '../../Image/monalisaNObg.png'

function Nav() {

    const [showNav,setShowNav] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll',actioning)
    
      return () => {
        window.removeEventListener('xscroll',actioning)
      }
    }, []);

    const actioning=()=>{
        if(window.scrollY > 100){
            setShowNav(true);
        }
        else{
            setShowNav(false);
        }
    };
    

    const data=[
        {h1:'HOME'},
        {h1:'BOOK A COURT'},
        {h1:'ABOUT US'},
        {h1:'CONTACT US'},
    ]

    const href= [
        '#',
        '#ticketBook',
        '#about',
        '#contact'
    ]


  return (
    <div className={`${showNav? 'fixed top-0 left-0 right-0 z-50 w-10/12':'relative w-10/12'} mx-auto bg-yellow-300`}>
        <div className='w-full flex items-center justify-between text-sm font-bbbb font-normal'>
            <div className=' ml-1 flex items-center'>
                <div className='w-16 h-16 mr-2 rounded-ful' style={{
                    backgroundImage:`url(${logo})`,
                    backgroundSize:'cover'
                }}>
                </div>
                <motion.h1 whileHover={{scale:1.3}}
                className='text-center text-xl font-bold text-red-600'>Monalisa Futsal</motion.h1>
            </div>
            <ul className='flex gap-3 items-center'>
            {data.map((val,i)=>{
                return <li key={i} className='' >
                    <a href={href[i]} className='px-3 py-2 hover:bg-red-600 hover:transition duration-200 hover:ease-in hover:text-slate-50 text-center rounded-lg '>{val.h1}</a>
                </li>
            })}
            </ul>
            <motion.button 
            whileHover={{scale:1.3}}
            transition={{duration:0.1}}
            
            className='px-3 py-2 text-left rounded-lg bg-red-600 text-white cursor-pointer mr-3'>Login</motion.button>
        </div>
    </div>
  )
}

export default Nav