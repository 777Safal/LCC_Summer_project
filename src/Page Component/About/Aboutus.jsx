import React from 'react'
import {LuTrophy} from 'react-icons/lu'
import {MdStadium} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {GiAutoRepair} from 'react-icons/gi'

function Aboutus() {
    const data=[
        {h1:'Hosting Tournament',
        p1:'organize and host futsal leagues and tournaments.scheduling matches, providing referees, and maintaining scoreboards',
        icon:<LuTrophy/>
        },
        {h1:'Spectator Seating',
        p1:'Have designated seating areas for spectators.Allows friends and family to watch and support players during games.',
        icon:<MdStadium/>
        },
        {h1:'Community Engagement',
        p1:"Engage with the local community by organizing charity events, youth outreach programs, and school partnerships.",
        icon:<IoIosPeople/>
        },
        {h1:'Maintenance and cleanliness',
        p1:"Maintaining a clean and well-kept facility is essential.Regular cleaning services to ensure a safe and hygienic environment for players.",
        icon:<GiAutoRepair/>
        },
    ]
    const slogan=[
        {p:'Join us at MonaLisa Futsal Booking and embark on an exciting futsal journey. Whether you are looking to improve your skills, have a friendly match with friends, or simply enjoy the thrill of the game, we are here to make it happen. Experience futsal like never before–book your court today!'},
        {p:'we offer a top-notch futsal experience for all ages and skill levels. Our state-of-the-art facility revolutionizes futsal booking, bringing enthusiasts together for hassle-free court reservations. Since 2021, we have become a trusted name in the futsal community with a strong reputation for excellence.Our journey began with a simple goal: to create a platform that brings together futsal lovers from all walks of life and provides them with a convenient and hassle-free way to reserve futsal courts.'}
    ]
        
    
  return (
    <div id='about' className='w-10/12 mx-auto py-5 bg-yellow-300'>
        <h1 className='my-5 text-5xl text-center font-bold text-slate-700 font-robotSlab font-bold'>About us</h1>
        <div className='px-10'>
            <p className='text-slate-700'>{slogan[1].p}</p>
        </div>
        <div className='px-10 mt-10 mb-5 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-grid-4 sm:gap-4  '>
            {data.map((val,i)=>{
                return <div key={i} className='py-8'>
                        <div className='h-60 bg-yellow-50 rounded-sm flex flex-col justify-center items-center relative shadow-xl'>
                        <div className='md:w-20 md:h-20 w-16 h-16 absolute md:-top-12 -top-9 bg-red-700 md:text-5xl text-4xl flex items-center justify-center rounded-full text-yellow-300'>
                                {val.icon}
                            </div>
                            <h1 className='w-[13ch] mx-auto  text-center leading-7 md:text-xl text-lg font-medium text-red-700'>{val.h1}</h1>
                            <p className=' text-sm mt-5 text-justify px-4'>
                                {val.p1}
                            </p>

                            
                    </div>
                </div>
            })}
            
        </div>
        <div className='px-10'>
            <p className='text-slate-700 '>{slogan[0].p}</p>
        </div>
    </div>
  )
}

export default Aboutus