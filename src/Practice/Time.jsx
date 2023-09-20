import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to get the current time in Kathmandu, Nepal
  const getCurrentTime = () => {
    // const nepalTimeOffset = 5.75 * 60 * 60 * 1000; // Nepal Standard Time (NST) offset
    const currentTimeInNepal = new Date().getTime();
    return new Date(currentTimeInNepal);
  };

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const [currentDate,setCurrentDate]=useState(new Date());
  const getCurrentDate=()=>{
    const currentDate = new Date().getDay();
    return new Date(currentDate);
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="text-2xl mb-4">Time</div>
      <div className="text-3xl font-bold mb-2">
        {currentTime.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kathmandu',
        })}
      </div>
      <div className="text-3xl font-bold mb-2">
        {currentDate.toLocaleDateString('en-us',{dateStyle:'medium'})}
      </div>
      <div className="mt-8 text-2xl">Location</div>
      <div className="text-xl">Kathmandu, Nepal</div>
    </div>
  );
};

export default Time;
