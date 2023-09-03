import React from 'react'

function Aboutus() {
    const data=[
        {h1:'Hosting Tournament',
        p1:'organize and host futsal leagues and tournaments.scheduling matches, providing referees, and maintaining scoreboards'  
        },
        {h1:'Spectator Seating',
        p1:'Have designated seating areas for spectators.Allows friends and family to watch and support players during games.'
        },
        {h1:'Community Engagement',
        p1:"Engage with the local community by organizing charity events, youth outreach programs, and school partnerships."
        },
        {h1:'Maintenance and cleanliness',
        p1:"Maintaining a clean and well-kept facility is essential.Regular cleaning services to ensure a safe and hygienic environment for players."
        },
    ]
  return (
    <div className='w-10/12 mx-auto bg-yellow-300 border'>
        <h1 className='my-3 text-5xl text-center font-bold text-slate-700 font-robotSlab font-bold'>About us</h1>
        <div className='px-10 grid grid-cols-4 gap-4'>
            {data.map((val,i)=>{
                return <div key={i} className='h-56 bg-yellow-50 rounded-sm flex flex-col justify-center items-center'>
                    <h1 className='w-[13ch] mx-auto mb-2 text-center leading-7 text-xl font-medium text-red-700'>{val.h1}</h1>
                        <p className='text-sm text-justify px-4'>
                            {val.p1}
                        </p>
                
                </div>
            })}
        </div>
    </div>
  )
}

export default Aboutus