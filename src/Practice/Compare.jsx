import React, { useState, useEffect } from 'react';

const Compare = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Function to calculate the time difference in hours
  const calculateTimeDifference = (time1, time2) => {
    const diffInMilliseconds = Math.abs(time2 - time1);
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60);
  };

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate buttons for hours from 5 AM to 10 PM
  const hoursButtons = Array.from({ length: 18 }, (_, index) => {
    const hour = index + 5;
    const selectedTimeValue = new Date(currentTime);
    selectedTimeValue.setHours(hour, 0, 0, 0);

    const isClickable = calculateTimeDifference(currentTime, selectedTimeValue) > 1;

    return (
      <button
        key={hour}
        className={`px-4 py-2 m-2 ${
          isClickable ? 'bg-blue-500 hover:bg-blue-700 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!isClickable}
        onClick={() => setSelectedTime(selectedTimeValue)}
      >
        {hour}:00
      </button>
    );
  });

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Current Running Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Select Time:</h2>
        <div className="flex flex-wrap">{hoursButtons}</div>
      </div>
    </div>
  );
};

export default Compare;
