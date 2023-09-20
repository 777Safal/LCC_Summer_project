import React, { useEffect, useState } from 'react';
import UserForm from '../Page Component/Login And Signup/UserForm';
import UserData from '../Page Component/Admin/Userdata';

function App1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    setUsers(userData);
  }, []);

  const handleUserSubmit = (user) => {
    // Update the user list and store it in local storage
    const updatedUsers = [...users, user];
    localStorage.setItem('userData', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <UserForm onUserSubmit={handleUserSubmit} />
      <UserData users={users} />
    </div>
  );
}

export default App1;
