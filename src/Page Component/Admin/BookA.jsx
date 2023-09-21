import React, { useState, useRef } from 'react';
import Adminconfirm from '../../Page Component/Booking/Adminconfirm';

function BookA() {
  const data = [{ h1: 'Book a Court' }];

  const days = [
    { h1: '20' },
    { h1: '21' },
    { h1: '22' },
  ];

  const time = [
    { h1: '05:00 AM - 06:00 AM' },
    { h1: '06:00 AM - 07:00 AM' },
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
  ];

  const [confirm, setConfirm] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const currentTime = new Date();

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div id='ticketBook' className='my-10 w-10/12 mx-auto rounded-sm overflow-hidden shadow-xl'>
      <div className='bg-yellow-300 flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-slate-700 font-robotSlab my-3 font-bold'>{data[0].h1}</h1>
        <div>
          {days.map((val, i) => {
            return (
              <button
                key={i}
                className={`px-4 py-2 bg-${selectedDay === val.h1 ? 'green-300' : 'yellow-100'} hover:bg-red-600 hover:text-amber-300`}
                onClick={() => handleDayClick(val.h1)}
              >
                {val.h1}
              </button>
            );
          })}
        </div>
      </div>

      <div className='py-3 bg-yellow-100 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
        {time.map((val, i) => {
          const [startTime, endTime] = val.h1.split(' - ');
          const [startHour, startMinute] = startTime.split(':');
          const timeSlot = new Date();
          timeSlot.setHours(startHour);
          timeSlot.setMinutes(startMinute);

          const isDisabled = currentTime > timeSlot;

          return (
            <button
              onClick={() => {
                if (!isDisabled) {
                  setConfirm(false);
                }
              }}
              key={i}
              className={`py-2 rounded-sm border-2 hover:bg-yellow-300 border-yellow-300 bg-yellow-100 mx-2 my-4`}>
              <h1 className='text-center md:text-sm lg:text-base text-xs'>{val.h1}</h1>
            </button>
          );
        })}
      </div>
      <Adminconfirm isVisible={confirm} onClose={() => setConfirm(false)} />
    </div>
  );
}

export default BookA;
