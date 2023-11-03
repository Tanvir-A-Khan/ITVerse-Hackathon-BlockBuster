import { createContext, useContext } from "react";
import { useEtherContext } from "./etherContext";

const MethodsContext = createContext();

// eslint-disable-next-line react/prop-types
export const MethodsContextProvider = ({ children }) => {
  const { instance } = useEtherContext();

  // Check if user is logged in
  const checkAuth = async () => {
    if (instance.contract === null) return false;

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
  const getABXValue = async () => {
    try {
      const res = await instance.contract.getABXValue();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * @param userAddress to check user's ABX value
   * @returns ABX instance.contract native token info
   */
  const getUserABXInfo = async () => {
    try {
      const res = await instance.contract.getUserABXInfo();
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * @param WEI amount
   * @returns How much ABX user owns
   */
  const buyABX = async (WEI) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.buyABX({ value: WEI });
        await res.wait();
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
        await res.wait();
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   * @param communityId
   * @param amount amount of ABX user wants to exchange
   * @param amount
   * @returns  New ABX and Native Token Balance
   */
  const exchangeABXwithCommunityNativeToken = async (
    communityId,
    amount,
    type // 0 for ABX -> Native 1 for Native => ABX
  ) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.exchangeABXwithNativeToken(
          communityId,
          amount,
          type
        );
        return res;
      } catch (err) {
        console.log(err);
      }
    }
  };

  /**
   *
   * @param  communityId
   * @param  artURI  @param artPrice
   */
  const uploadART = async (communityId, artURI, artPrice, artCategoryId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.uploadArt(
          communityId,
          artURI,
          artPrice,
          artCategoryId
        );

        await res.wait();
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
        getABXValue,
        getUserABXInfo,
        buyABX,
        getNewCommunityCost,
        createCommunity,
        exchangeABXwithCommunityNativeToken,
        uploadART,
      }}
    >
      {children}
    </MethodsContext.Provider>
  );
};

export const useMethodsContext = () => useContext(MethodsContext);
