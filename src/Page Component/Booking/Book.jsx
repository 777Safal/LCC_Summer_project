import React, { useState, useRef, useEffect } from 'react';
import ConfirmBooking from './ConfirmBooking';

function Book() {
  const data = [{ h1: 'Book a Court' }];

  const [currentTime,setCurrentTime]=useState(new Date());
  
  const getCurrentTime=()=>{
    const currentTimeInNepal = new Date().getTime();
    return new Date (currentTimeInNepal);
  }

  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentTime(getCurrentTime());
    },1000);
  
    return () => clearInterval(interval);
  }, [])

  const [currentDate,setCurrentDate]= useState(new Date());
  const getCurrentDate=()=>{
    const currentDate = new Date().getDate();
    return new Date(currentDate);
  }

  
  const time = [
    
    
    
    
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
  ];

  const [confirm, setConfirm] = useState(false);

  const isTimeSlotPassed = (timeSlot) => {
    const [startHour, startMinute] = timeSlot.split(':').map(Number);
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour > startHour) {
      return true; // Time slot has passed
    } else if (currentHour === startHour && currentMinute >= startMinute) {
      return true; // Time slot has passed
    }

    return false; // Time slot is in the future
  };


  return (
    <div id='ticketBook' className='my-10 w-10/12 mx-auto rounded-sm overflow-hidden shadow-xl'>
      <div className='bg-yellow-300 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-slate-700 font-robotSlab my-3 font-bold'>{data[0].h1}</h1>
        <div className='flex justify-center items-center'>
        <div className='text-xl px-5 py-2 bg-yellow-100'>
          {currentDate.toLocaleDateString('en-Us',{day:'2-digit'})}
        </div>
        <div className='text-base font-normal self-center ml-2'>
          {currentTime.toLocaleTimeString('en-US',{
            timeZone:'Asia/kathmandu',
          })}
        </div>
        
        </div>
      </div>

      <div className='py-3 bg-yellow-100 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
        <button   className={`py-2 rounded-sm border-2  border-yellow-300 bg-red-600 mx-2 my-4 }`}
          >05:00 AM - 06:00 AM</button>
        <button   className={`py-2 rounded-sm border-2  border-yellow-300 bg-red-600 mx-2 my-4 }`}
          >06:00 AM - 07:00 AM</button>
        <button   className={`py-2 rounded-sm border-2  border-yellow-300 bg-red-600 mx-2 my-4 }`}
          >07:00 AM - 08:00 AM</button>
        <button   className={`py-2 rounded-sm border-2  border-yellow-300 bg-red-600 mx-2 my-4 }`}
          >08:00 AM - 09:00 AM</button>
        <button   className={`py-2 rounded-sm border-2  border-yellow-300 bg-red-600 mx-2 my-4 }`}
          >09:00 AM - 10:00 AM</button>
        {time.map((val, i) => {
          return (
            <button
              key={i}
              onClick={()=>{setConfirm(true)}}
              className={`py-2 rounded-sm border-2 hover:bg-yellow-300 border-yellow-300 bg-yellow-100 mx-2 my-4 }`}
              >
              <h1 className='text-center md:text-sm lg:text-base text-xs'>{val.h1}</h1>
            </button>
          );
        })}
      </div>
      <div className='mx-2 my-3 flex justify-between w-[250px]'>
          <div className='w-fit flex flex-col items-center'>
            <div className='w-6 h-6 rounded-full border-2 bg-yellow-100 border border-amber-300'></div>
            <h1 className='text-sm'>Available</h1>
          </div>
          <div className='w-fit flex flex-col items-center'>
            <div className='w-6 h-6 rounded-full border-2 bg-lime-300 border border-amber-300'></div>
            <h1 className='text-sm'>Booked</h1>
          </div>
          <div className='w-fit flex flex-col items-center'>
            <div className='w-6 h-6 rounded-full border-2 bg-red-600 border border-amber-300'></div>
            <h1 className='text-sm'>Unavailable</h1>
          </div>
      </div>
      <ConfirmBooking isVisible={confirm} onClose={() => setConfirm(false)} />
    </div>
  );
}

export default Book;
