import React, { useState } from 'react';

const UserForm = ({ onUserSubmit }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    sex: '',
    contactNo: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserSubmit(user);
    setUser({
      firstName: '',
      lastName: '',
      age: '',
      sex: '',
      contactNo: '',
      address: '',
    });
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">User Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Age
            </label>
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              sex
            </label>
            <input
              type="text"
              name="sex"
              value={user.sex}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
        
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              required
            />
          </div>
          
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
