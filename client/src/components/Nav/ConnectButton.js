import React from 'react';

const ConnectButton = () => {
  // Logic for handling connection can be added here
  const handleConnect = () => {
    // Implement your connect logic here
    console.log('Connect button clicked');
  };

  return (
    <button onClick={handleConnect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Connect
    </button>
  );
};

export default ConnectButton;