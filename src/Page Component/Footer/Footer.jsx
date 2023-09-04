import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'
import {GrFacebookOption} from 'react-icons/gr'
import {FaWhatsapp} from 'react-icons/fa'
import {BiLogoInstagramAlt} from 'react-icons/bi'


function Footer() {
    const headings=[
        {h1:'Our Contact'}
    ]
    const logo=[
        {icons:<GrFacebookOption/>},
        {icons:<FaWhatsapp/>},
        {icons:<BiLogoInstagramAlt/>},
    ]
    const contact=[
        {h1:'+977 9800000000',h2:'+977 9808765432',icon:<FiPhoneCall/>},
        {h1:'monalisa@gmail.com',h2:'www.mfutsal.com',icon:<TbMail/>},
        {h1:'Tilottama ,Rupandehi',h2:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      ]
  return (
    <div className='h-96 px-2 py-2 flex bg-gradient-to-b from-yellow-300 to-white'>
        <div className='p-2 rounded-md h-fit w-56 '>
            <h1 className='text-xl text-center border-b-red-700 border-b-2 font-medium '>{headings[0].h1}</h1>
            <address className='text-sm w-fit mx-auto not-italic'>
                    {contact.map((val,i)=>{
                        return <div key={i} className='flex items-center my-3'>
                            <div className='w-8 h-8 mr-3 bg-red-700 rounded-full flex items-center justify-center text-xl text-white'>{val.icon}</div>  
                            <div>
                            <h1>{val.h1}</h1>
                            <h1>{val.h2}</h1>
                            </div>
                        </div>
                    })}
                </address> 
        </div>
{/* map section */}
        <div className='w-72 h-72 mb-10 drop-shadow-2xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14135.711824234968!2d83.4669675!3d27.6577006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858177b65ab5%3A0xf2d52a27c6fceaf6!2sMonalisa%20Futsal%20Arena!5e0!3m2!1sen!2snp!4v1688073562166!5m2!1sen!2snp" 
            className='w-full h-full'></iframe>
        </div>         
{/* links */}
        <div>
            {logo.map((val,i)=>{
                return <div key={i} className='w-10 h-10 flex justify-center items-center bg-white'>{val.icons}</div>
            })}
        </div>
    </div>
  )
}

export default Footer