import React, { useEffect, useState } from 'react';

const Userdata = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    setUsers(userData);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">User Data</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">First Name</th>
            <th className="border border-gray-400 px-4 py-2">Last Name</th>
            <th className="border border-gray-400 px-4 py-2">Age</th>
            <th className="border border-gray-400 px-4 py-2">Sex</th>
            <th className="border border-gray-400 px-4 py-2">Contact No.</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-400 px-4 py-2">{user.firstName}</td>
              <td className="border border-gray-400 px-4 py-2">{user.lastName}</td>
              <td className="border border-gray-400 px-4 py-2">{user.age}</td>
              <td className="border border-gray-400 px-4 py-2">{user.sex}</td>
              <td className="border border-gray-400 px-4 py-2">{user.contactNo}</td>
              <td className="border border-gray-400 px-4 py-2">{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userdata;
