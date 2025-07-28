import React from 'react';

const ClaimButton = ({ onClaim, disabled }) => {
  return (
    <div>
      <button
        onClick={onClaim}
        disabled={disabled}
        style={{
          padding: '10px 20px',
          backgroundColor: disabled ? '#ccc' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: disabled ? 'not-allowed' : 'pointer',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
      >
        Claim Points
      </button>
    </div>
  );
};

export default ClaimButton;
