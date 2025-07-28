import React from 'react';

const Leaderboard = ({ data }) => {
  return (
    <div>
      <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>🏆 Leaderboard</h2>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
      >
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={tableHeaderStyle}>Rank</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.name}>
              <td style={tableCellStyle}>{user.rank}</td>
              <td style={tableCellStyle}>{user.name}</td>
              <td style={tableCellStyle}>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: '12px',
  borderBottom: '2px solid #ccc',
  textAlign: 'left',
  fontWeight: 'bold',
  color: '#333',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #eee',
  textAlign: 'left',
  color: '#444',
};

export default Leaderboard;
