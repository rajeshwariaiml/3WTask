import React, { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import {
  fetchUsers,
  createUser,
  claimPoints,
  fetchLeaderboard,
} from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [lastClaimedPoints, setLastClaimedPoints] = useState(null);
  const [newUserName, setNewUserName] = useState('');

  // Load users and leaderboard on mount
  useEffect(() => {
    loadUsers();
    loadLeaderboard();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const loadLeaderboard = async () => {
    try {
      const res = await fetchLeaderboard();
      setLeaderboard(res.data);
    } catch (err) {
      console.error('Error fetching leaderboard:', err);
    }
  };

  const handleClaim = async () => {
    if (!selectedUser) return;

    try {
      const res = await claimPoints(selectedUser);
      const { points } = res.data;
      setLastClaimedPoints(points);
      await loadUsers();
      await loadLeaderboard();
    } catch (err) {
      console.error('Claim failed:', err);
    }
  };

  const handleAddUser = async () => {
    if (!newUserName.trim()) return;

    try {
      await createUser(newUserName.trim());
      setNewUserName('');
      await loadUsers();
      await loadLeaderboard();
    } catch (err) {
      console.error('Add user failed:', err);
    }
  };

  return (
    <div
      style={{
        padding: '30px',
        maxWidth: '600px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>🎯 Leaderboard Task</h1>

      {/* Add User Input and Button */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter new user name"
          style={{
            padding: '8px',
            flex: 1,
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleAddUser}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add User
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <UserSelector
          users={users}
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <ClaimButton onClaim={handleClaim} disabled={!selectedUser} />
      </div>

      {lastClaimedPoints !== null && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          You claimed {lastClaimedPoints} points!
        </p>
      )}

      <Leaderboard data={leaderboard} />
    </div>
  );
}

export default App;
