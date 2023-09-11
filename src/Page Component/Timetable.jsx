import { useState } from 'react';

const Timetable = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const availableSlots = Array.from({ length: 18 }, (_, i) => i + 5);

  const handleSlotClick = (slot) => {
    if (!bookedSlots.includes(slot)) {
      setBookedSlots([...bookedSlots, slot]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Timetable</h1>
      <div className="grid grid-cols-3 gap-4">
        {availableSlots.map((slot) => (
          <div key={slot}>
            <button
              className={`p-2 border border-gray-300 rounded ${
                bookedSlots.includes(slot)
                  ? 'bg-red-500 text-white cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
              onClick={() => handleSlotClick(slot)}
              disabled={bookedSlots.includes(slot)}
            >
              {slot}:00 - {slot + 1}:00
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Booked Slots</h2>
        <ul>
          {bookedSlots.map((slot) => (
            <li key={slot}>{slot}:00 - {slot + 1}:00</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timetable;
