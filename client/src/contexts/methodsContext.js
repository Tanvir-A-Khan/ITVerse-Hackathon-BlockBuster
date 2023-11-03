import { ethers } from "ethers";
import { createContext, useContext } from "react";
import { useEtherContext } from "./etherContext";

const MethodsContext = createContext();

// eslint-disable-next-line react/prop-types
export const MethodsContextProvider = ({ children }) => {
  const { instance } = useEtherContext;

  // Check if user is logged in
  const checkAuth = () => {
    if (instance.instance.contract === null) return false;

    return true;
  };

  //==========================================Milestone 1======================================/
  /**
   *
   * @returns Array of all communities
   */
  const getAllCommunities = async () => {
    try {
      const res = await instance.contract.getAllCommunities();
      return res;
    } catch (err) {
      console.log(err);
    }
  };
  /**
   *
   * @returns Desired Community
   */
  const getCommunity = async (communityId) => {
    try {
      const res = await instance.contract.getCommunity(communityId);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  /**
   *
   * @param userAddress
   * @returns If the user is member of community or not
   */
  const checkCommunityStakeholder = async (userAddress) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.checkCommunityStakeholder(
          userAddress
        );
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   *
   * @returns ABX instance.contract native token info
   */
  const getABXInfo = async () => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.getABXInfo();
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * @param ETH amount
   * @returns How much ABX user owns
   */
  const buyABX = async (ETH) => {
    if (checkAuth()) {
      try {
        const eth = ethers.parseEther(ETH);
        const res = await instance.contract.buyABX({ value: eth });
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * @returns How much ABX is required to create new Community
   */
  const getNewCommunityCost = async () => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.getNewCommunityCost();
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * @param communityTitle new community title, @param communityDescription new community description, @param communityTokenName new community token name
   * @param communityTokenSymbol new community token symbol @param communityInitialSupply new community native token initial @param communityTypeId Id of new community type
   * @returns How much ABX user owns
   */
  const createCommunity = async (
    communityTitle,
    communityDescription,
    communityTokenName,
    communityTokenSymbol,
    communityInitialSupply,
    communityTypeId
  ) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.createCommunity(
          communityTitle,
          communityDescription,
          communityTokenName,
          communityTokenSymbol,
          communityInitialSupply,
          communityTypeId
        );
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * @param ABXAmount amount of ABX user wants to exchange
   * @returns  New ABX and Native Token Balance
   */
  const exchangeABXwithCommunityNativeToken = async (
    communityId,
    ABXAmount
  ) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.exchangeABXwithNativeToken(
          communityId,
          ABXAmount
        );
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };
  /**
   * @param CommunityNativeToken amount of Community Native Token user wants to exchange
   * @returns  New ABX and Native Token Balance
   */
  const exchangeCommunityNativeTokenWithABX = async (
    communityId,
    CommunityNativeToken
  ) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.exchangeCommunityNativeTokenWithABX(
          communityId,
          CommunityNativeToken
        );
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <MethodsContext.Provider
      value={{
        getAllCommunities,
        getCommunity,
        checkCommunityStakeholder,
        getABXInfo,
        buyABX,
        getNewCommunityCost,
        createCommunity,
        exchangeABXwithCommunityNativeToken,
        exchangeCommunityNativeTokenWithABX,
      }}
    >
      {children}
    </MethodsContext.Provider>
  );
};

export const useMethodsContext = () => useContext(MethodsContext);
