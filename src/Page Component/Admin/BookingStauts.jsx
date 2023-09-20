import React, { useState, useEffect } from 'react';

const BookingStatus = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulate fetching booking status data from an API or other source
    // For demonstration purposes, we initialize it with sample data
    const sampleBookings = [
      {
        email: 'user1@example.com',
        userName: 'User 1',
        paymentStatus: 'Paid',
        time: '10:00 AM - 11:00 AM',
        date: '2023-09-20',
      },
      {
        email: 'user2@example.com',
        userName: 'User 2',
        paymentStatus: 'Partially Paid',
        time: '02:00 PM - 03:00 PM',
        date: '2023-09-21',
      },
      // Add more booking status objects as needed
    ];

    setBookings(sampleBookings);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Booking Status</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Email ID</th>
            <th className="border border-gray-400 px-4 py-2">User Name</th>
            <th className="border border-gray-400 px-4 py-2">Payment Status</th>
            <th className="border border-gray-400 px-4 py-2">Time</th>
            <th className="border border-gray-400 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-400 px-4 py-2">{booking.email}</td>
              <td className="border border-gray-400 px-4 py-2">{booking.userName}</td>
              <td className="border border-gray-400 px-4 py-2">{booking.paymentStatus}</td>
              <td className="border border-gray-400 px-4 py-2">{booking.time}</td>
              <td className="border border-gray-400 px-4 py-2">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingStatus;
