import React, { useEffect, useState } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data);
          setLoading(false);
        });
    }, 1500);
  }, []);

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner" />
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="user-list-scroll">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <div>
              <strong>{user.name}</strong><br />
              <span>{user.email}</span>
            </div>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
