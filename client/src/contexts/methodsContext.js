import { createContext, useContext } from "react";
import toast from "react-hot-toast";
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
        toast.success("Community Creation Successful");
        return res;
      } catch (err) {
        console.log(err);
        toast.error("Community Creation Failed");
      }
    }
  };

  /**
   * @param communityId
   * @param amount amount of ABX user wants to exchange
   * @param amount
   * @returns  New ABX and Native Token Balance
   */
  const exchangeTokens = async (
    communityId,
    amount,
    type // 0 for Native -> ABX 1 for ABX => Native
  ) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.exchangeTokens(
          communityId,
          amount,
          type
        );
        await res.wait();
        toast.success("Exchange Successful");
      } catch (err) {
        console.log(err);
        toast.success("Exchange Failed");
      }
    }
  };

  /**
   *
   * @param  communityId
   * @param  artURI  @param artPrice @param artType false for general true for exclusive
   */
  const uploadART = async (communityId, artURI, artPrice, artType) => {
    let mark = false;
    if (Number(artType) === 1) {
      mark = true;
    }
    if (checkAuth()) {
      try {
        const res = await instance.contract.uploadART(
          communityId,
          artPrice,
          artURI,
          mark
        );

        await res.wait();
        toast.success("Uploaded Successfully");
      } catch (err) {
        console.log(err);
        toast.error("Upload Failed Try Again");
      }
    }
  };

  const getPendingArts = async (communityId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.getPendingArts(communityId);

        await res.wait();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getUserCommunityFund = async (communityId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.getUserCommunityFund(communityId);

        await res.wait();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const upVote = async (communityId, artId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.upVote(communityId, artId);

        await res.wait();
      } catch (err) {
        console.log(err);
        await voteFinished(communityId, artId);
        window.location.reload();
      }
    }
  };

  const downVote = async (communityId, artId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.downVote(communityId, artId);

        await res.wait();
      } catch (err) {
        console.log(err);
        await voteFinished(communityId, artId);
        window.location.reload();
      }
    }
  };
  const voteFinished = async (communityId, artId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.voteFinished(communityId, artId);

        await res.wait();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const markArtwordAsSellable = async (communityId, artId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.markArtForSell(communityId, artId);

        await res.wait();
        toast.success("Success");
      } catch (err) {
        console.log(err);
        toast.success("Failed");
      }
    }
  };

  const getCommunityArts = async (communityId) => {
    if (checkAuth()) {
      try {
        const res = await instance.contract.getCommunityArts(communityId);

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
        exchangeTokens,
        uploadART,
        getPendingArts,
        getCommunityArts,
        getUserCommunityFund,
        upVote,
        downVote,
        voteFinished,
        markArtwordAsSellable,
      }}
    >
      {children}
    </MethodsContext.Provider>
  );
};

export const useMethodsContext = () => useContext(MethodsContext);
