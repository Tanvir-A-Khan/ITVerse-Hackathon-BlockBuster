import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

const EtherContext = createContext();
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "buyABX",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "checkCommunityStakeholder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "communities",
    outputs: [
      {
        internalType: "contract Community",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comvalue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_communityType",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_sybmol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "communityInitialSupply",
        type: "uint256",
      },
    ],
    name: "createCommunity",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ABXamount",
        type: "uint256",
      },
    ],
    name: "exchangeABXwithCommunityNativeToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "CommunityNativeToken",
        type: "uint256",
      },
    ],
    name: "exchangeCommunityNativeTokenwithABX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getABXValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getACommunity",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCommunity",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "communityType",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "string",
            name: "sybmol",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalToken",
            type: "uint256",
          },
        ],
        internalType: "struct Platform.COMMUNITYINFO[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCategories",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCommunityValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserABXInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "communityId",
        type: "uint256",
      },
    ],
    name: "getUserCommunityNativeTokenInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

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

        const contract = new ethers.Contract(
          process.env.REACT_APP_CONTRACT_ADDRESS,
          abi,
          signer
        );

        setInstance({
          provider: provider,
          account: account,
          balance: Number(balance),
          contract: contract,
        });
        // Listen for events
        //eventListen(provider, account);
      } else {
        setInstance({
          provider: null,
          account: null,
          balance: null,
          contract: null,
        });
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

      localStorage.setItem("account", account);
      // eventListen(provider, account);

      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        abi,
        signer
      );

      setInstance({
        provider: provider,
        account: account,
        balance: Number(balance),
        contract: contract,
      });
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
