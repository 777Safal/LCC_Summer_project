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
    <div className='h-96 px-2 py-2 flex bg-gradient-to-b from-yellow-300 to-white'>
        <div className='p-2 rounded-md bg-slate-50 w-72 shadow-md'>
            <div><h1 className='text-xl text-center font-medium '>{headings[0].h1}</h1></div>
            <div className='flex justify-center'>
                <address className='text-sm w-full border-yellow-300'>
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
        
        <div className='w-72 h-72 mb-10 drop-shadow-2xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14135.711824234968!2d83.4669675!3d27.6577006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858177b65ab5%3A0xf2d52a27c6fceaf6!2sMonalisa%20Futsal%20Arena!5e0!3m2!1sen!2snp!4v1688073562166!5m2!1sen!2snp" 
            className='w-full h-full'></iframe>
        </div>         
        

    </div>
  )
}

export default Footer