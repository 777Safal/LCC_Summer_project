import React, { useState } from 'react';

const Date = () => {
  const [selectedDate, setSelectedDate] = useState('today');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center space-x-4">
        <button
          className={`px-4 py-2 ${
            selectedDate === 'today' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleDateChange('today')}
        >
          Today
        </button>
        <button
          className={`px-4 py-2 ${
            selectedDate === 'tomorrow' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleDateChange('tomorrow')}
        >
          Tomorrow
        </button>
        <button
          className={`px-4 py-2 ${
            selectedDate === 'next' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleDateChange('next')}
        >
          Day After Tomorrow
        </button>
      </div>

      <div className="mt-6">
        {selectedDate === 'today' && (
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white">a</button>
            <button className="px-4 py-2 bg-blue-500 text-white">b</button>
            <button className="px-4 py-2 bg-blue-500 text-white">c</button>
          </div>
        )}
        {selectedDate === 'tomorrow' && (
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white">d</button>
            <button className="px-4 py-2 bg-blue-500 text-white">e</button>
            <button className="px-4 py-2 bg-blue-500 text-white">f</button>
          </div>
        )}
        {selectedDate === 'next' && (
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white">g</button>
            <button className="px-4 py-2 bg-blue-500 text-white">h</button>
            <button className="px-4 py-2 bg-blue-500 text-white">i</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Date;
