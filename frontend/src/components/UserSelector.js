import React from 'react';

const UserSelector = ({ users, selectedUser, onSelectUser }) => {
  return (
    <div>
      <label>Select User: </label>
      <select value={selectedUser} onChange={(e) => onSelectUser(e.target.value)}>
        <option value="">-- Choose a user --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
