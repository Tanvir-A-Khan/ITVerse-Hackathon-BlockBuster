import React from "react";
import { useEtherContext } from "../../contexts/etherContext";

const ConnectButton = () => {
  const { instance, setContract, disconnect } = useEtherContext();
  const { account, balance } = instance;

  // console.log(instance);

  const handleConnect = () => {
    setContract();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <>
      {account === null ? (
        <button
          onClick={handleConnect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Connect
        </button>
      ) : (
        <button
          onClick={handleDisconnect}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Disconnect
        </button>
      )}
    </>
  );
};

export default ConnectButton;
