import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'
import {GrFacebookOption} from 'react-icons/gr'
import {FaWhatsapp} from 'react-icons/fa'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {LuTrophy} from 'react-icons/lu'
import {MdStadium} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {GiAutoRepair} from 'react-icons/gi'

function Footer() {
    const headings=[
        {h1:'Our Contact'},
        {h1:'About us'},
        {h1:'Social Links'},
    ]
    const logo=[
        {icons:<GrFacebookOption/>, textColor:'text-blue-400',
        name:'https://www.facebook.com/MonalisaSportsClub/'},
        {icons:<FaWhatsapp/>,textColor:'text-green-400',
        name:'https://www.facebook.com/MonalisaSportsClub/'},
        {icons:<BiLogoInstagramAlt/>,textColor:'text-instagram',
        name:'https://www.instagram.com/monalisa_futsal_arena/'},
    ]
    const contact=[
        {h1:'+977 9800000000',h2:'+977 9808765432',icon:<FiPhoneCall/>},
        {h1:'monalisa@gmail.com',h2:'www.mfutsal.com',icon:<TbMail/>},
        {h1:'Tilottama ,Rupandehi',h2:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      ]
      const aboutus=[
        {h1:'Hosting Tournament',icon:<LuTrophy/>},
        {h1:'Spectator Seating',icon:<MdStadium/>},
        {h1:'Community Engagement',icon:<IoIosPeople/>},
        {h1:'Maintenance and cleanliness',icon:<GiAutoRepair/>},
      ]
      const datas=[
        {h1:"Privacy Policy"},
        {h1:"Terms of Service"},
        {h1:"Copyright Information"},
      ]
  return (
    <div className='md:h-96 h-fit px-2 md:py-2 py-5 mt-16 flex justify-center items-center bg-red-700'>
        <div className='w-11/12 bg-black mx-auto md:flex md:justify-between grid grid-cols-1'>
        <div className='p-2 h-fit md:w-56 '>
            <h1 className='text-xl md:text-center font-medium text-amber-400 '>{headings[0].h1}</h1>
            <address className='text-sm w-fit md:mx-auto md:pl-0 pl-10 not-italic'>
                    {contact.map((val,i)=>{
                        return <div key={i} className='flex items-center my-3'>
                            <div className='w-8 h-8 mr-3 bg-amber-400 rounded-full flex items-center justify-center text-xl text-slate-50'>{val.icon}</div>  
                            <div className='text-slate-50'>
                            <h1>{val.h1}</h1>
                            <h1>{val.h2}</h1>
                            </div>
                        </div>
                    })}
                </address> 
        </div>
{/* map section */}
        <div className='md:w-72 md:h-60 h-64 p-2 mb-10 drop-shadow-2xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14135.711824234968!2d83.4669675!3d27.6577006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996858177b65ab5%3A0xf2d52a27c6fceaf6!2sMonalisa%20Futsal%20Arena!5e0!3m2!1sen!2snp!4v1688073562166!5m2!1sen!2snp" 
            className='w-full h-full rounded-sm'></iframe>
        </div>         
{/* about us  */}
        <div className='p-2 rounded-md h-fit w-56 '>
            <h1 className='text-xl md:text-center font-medium text-amber-400'>{headings[1].h1}</h1>
            <ul className='text-sm w-fit mx-auto md:pl-0 pl-10'>
                    {aboutus.map((val,i)=>{
                        return <li key={i} className='flex items-center my-3'>
                            <div className='w-8 h-8 mr-3 bg-amber-400 rounded-full flex items-center justify-center text-xl text-slate-50'>{val.icon}</div>  
                            <h1 className='text-slate-50'>{val.h1}</h1>
                        </li>
                    })}
                </ul> 
        </div>

{/* links */}
        <div className='p-2'>
        <h1 className='text-xl md:text-center font-medium text-amber-400 '>{headings[2].h1}</h1>
        <div className='md:w-36  w-52 mt-3 pl-10 md:pl-0 flex justify-between'>
            {logo.map((val,i)=>{
                return <div key={i} className={`${val.textColor} w-10 h-10 rounded-xl text-xl flex justify-center items-center bg-white`}>
           
<a href={val.name}>{val.icons}</a>
                </div>
            })}
        </div>
        </div>
{/* copyright info */}
    <div className='p-2'>
            {datas.map((val,i)=>{
                return <div key={i} className='font-medium text-amber-400'>
                    {val.h1}
                </div>
            })}
        </div>
        </div>
    </div>
  )
}

export default Footer