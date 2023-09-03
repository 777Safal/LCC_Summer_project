import React from 'react'

function Nav() {
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
    <div className='absolute top-0 left-0 right-0 w-10/12 h-16 mx-auto flex items-center justify-center'>
        <div className='w-full flex items-center justify-between text-sm font-bbbb font-normal'>
            <div className='flex items-center'>
                <div 
                className='w-16 h-16 mr-2 rounded-ful bg-cover bg-center 
                bg-[url(https://o.remove.bg/downloads/173db0fb-611e-4810-98d1-0793f3fc01e1/images-removebg-preview.png)]'>
                </div>
                <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
            </div>
            <ul className='flex gap-3 items-center'>
            {data.map((val,i)=>{
                return <li key={i} className=''>
                    <a href={href[i]} className='px-3 py-2 text-center rounded-lg hover:bg-red-600 hover:text-white'>{val.h1}</a>
                </li>
            })}
            </ul>
            <div className='px-3 py-2 text-left rounded-lg hover:bg-red-600 hover:text-white cursor-pointer'>Login</div>
        </div>
    </div>
  )
}

export default Nav