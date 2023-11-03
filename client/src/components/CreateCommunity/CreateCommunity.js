import React from "react";
import { useEtherContext } from "../../contexts/etherContext";
import NewCommunityDetails from "./NewCommunityDetails";
import NewCommunityForm from "./NewCommunityForm";

const CreateCommunity = () => {
  const { instance, setContract, disconnect } = useEtherContext();
  const { account, balance } = instance;
  
  return (
    <div>
      <NewCommunityDetails account={account} />
    {account  !== null ?
    <>
      <h1 className="text-center text-bold text-2xl mt-4">Create New Community</h1>
      <NewCommunityForm />
    </>
      :
      <p className="text-center my-8 py-8 bg-red-400">Please Connect with Metamask</p>  
    }
    </div>
  );
};

export default CreateCommunity;
