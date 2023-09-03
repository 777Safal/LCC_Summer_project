import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'

function Footer() {
    const headings=[
        {h1:'Our Contact'}
    ]
    const contact=[
        {h1:'+977 9800000000',h2:'+977 9808765432',icon:<FiPhoneCall/>},
        {h1:'monalisa@gmail.com',h2:'www.mfutsal.com',icon:<TbMail/>},
        {h1:'Tilottama ,Rupandehi',h2:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      ]
  return (
    <div className='px-2 py-2 font-poping bg-gradient-to-b from-yellow-300 to-white'>
        <div className='p-2 rounded-md bg-slate-50 max-w-fit shadow-md'>
            <div><h1 className='max-w-fit text-xl font-medium '>{headings[0].h1}</h1></div>
            <div>
                <address className='text-sm max-w-[25ch] border-t-2 border-yellow-300'>
                    {contact.map((val,i)=>{
                        return <div key={i} className='flex items-center my-1'>
                            <div className='text-lg mr-2 text-yellow-500'>{val.icon}</div>
                            <div>
                            <h1>{val.h1}</h1>
                            <h1>{val.h2}</h1>
                            </div>
                        </div>
                    })}
                </address>  
            </div>
        </div>
        <div className='bg-yellow-300 max-w-fit shadow-md'> 
            
        </div>

    </div>
  )
}

export default Footer