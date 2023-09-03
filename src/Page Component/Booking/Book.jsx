import React from 'react'

function Book() {
  const data=[
    {h1:'Book a Court'}
  ]
  const week=[
    {h1:"Sun"},
    {h1:"Mon"},
    {h1:"Tue"},
    {h1:"Wed"},
    {h1:"Thu"},
    {h1:"Fri"},
    {h1:"Sat"},
  ]
  const time=[
    {h1:'05:00 AM - 06:00 AM',},
    {h1:'06:00 AM - 07:00 AM'},
    {h1:'07:00 AM - 08:00 AM'},
    {h1:'08:00 AM - 09:00 AM'},
    {h1:'09:00 AM - 10:00 AM'},
    {h1:'10:00 AM - 11:00 AM'},
    {h1:'11:00 AM - 12:00 PM'},
    {h1:'12:00 PM - 01:00 PM'},
    {h1:'01:00 PM - 02:00 PM'},
    {h1:'02:00 PM - 03:00 PM'},
    {h1:'03:00 PM - 04:00 PM'},
    {h1:'04:00 PM - 05:00 PM'},
    {h1:'05:00 PM - 06:00 PM'},
    {h1:'06:00 PM - 07:00 PM'},
    {h1:'07:00 PM - 08:00 PM'},
    {h1:'08:00 PM - 09:00 PM'},
    {h1:'09:00 PM - 10:00 PM'},
  ]
  return (
    <div className='mt-10 w-10/12 mx-auto font-robotSlab rounded-sm overflow-hidden'>
      <div className='bg-yellow-300 flex flex-col items-center'>
        <h1 className='text-3xl my-3 font-medium'>{data[0].h1}</h1>
        <div>
          <ul className='flex'>
            {week.map((val,i)=>{
              return <li key={i} className='w-20 py-2 rounded-sm bg-yellow-100 text-center mr-2'>
                {val.h1}
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className='py-3 bg-yellow-100 grid grid-cols-5'>
        {time.map((val,i)=>{
          return <div key={i} className='w-48 py-2 rounded-sm border-2 hover:bg-yellow-300 border-yellow-300 bg-yellow-100 mx-2 my-4'>
            <h1 className='text-center'>{val.h1}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default Book