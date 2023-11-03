import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

const EtherContext = createContext();

// eslint-disable-next-line react/prop-types
export const EtherContextProvider = ({ children }) => {
  const { ethereum } = window;

  const [instance, setInstance] = useState({
    account: null,
    contract: null,
    provider: null,
    balance: null,
  });

  // Listen for metamask events
  // accountsChanged =>
  // chainChanged =>
  const eventListen = (provider, account) => {
    // Listen for accountsChanged MetaMask event
    window.ethereum.on("accountsChanged", async () => {
      // Check if user disconnected the wallet or changed account
      if (window.ethereum.selectedAddress) {
        provider = new ethers.BrowserProvider(window.ethereum);
        let newSigner = await provider.getSigner();
        account = await newSigner.getAddress();
        const balance = await provider.getBalance(account);
        setInstance({
          provider: provider,
          balance: balance,
          account: account,
        });
      } else {
        localStorage.clear();
        setInstance({
          account: null,
          contract: null,
          provider: null,
          balance: null,
        });
      }
    });

    // Check if user changed network
    window.ethereum.on("chainChanged", async () => {
      let newProvider = new ethers.BrowserProvider(window.ethereum);
      const balance = await newProvider.getBalance(account);
      setInstance({
        provider: newProvider,
        balance: balance,
        account: account,
      });
    });
  };

  // Disconnect frontend with MetaMask
  const disconnect = () => {
    localStorage.clear();
    setInstance({
      account: null,
      contract: null,
      provider: null,
      balance: null,
    });
  };

  useEffect(() => {
    // Check if user already gave permission to access MetaMask
    const init = async () => {
      if (localStorage.getItem("account")) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = await signer.getAddress();
        const balance = await provider.getBalance(account);
        setInstance({
          provider: provider,
          account: account,
          balance: Number(balance),
        });
        // Listen for events
        eventListen(provider, account);
      }
    };
    init();
  }, []);

  const setContract = async () => {
    if (ethereum !== undefined) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const account = await signer.getAddress();
      const balance = await provider.getBalance(account);
      setInstance({ provider: provider, account: account, balance: balance });
      localStorage.setItem("account", account);
      eventListen(provider, account);
      // const contract = new ethers.Contract(
      //   process.env.REACT_APP_CONTRACT_ADDRESS,
      //   process.env.REACT_APP_CONTRACT_ABI,
      //   signer
      //   );
      // setInstance({
      //   account: window.ethereum.selectedAddress,
      //   contract,
      // });
    } else console.log("No Ethereum Instance available");
  };

  return (
    <EtherContext.Provider
      value={{
        instance,
        setContract,
        disconnect,
      }}
    >
      {children}
    </EtherContext.Provider>
  );
};

export const useEtherContext = () => useContext(EtherContext);
