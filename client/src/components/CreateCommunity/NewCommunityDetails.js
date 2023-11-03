import React from "react";
import UserABXInfo from "./UserABXInfo";

const NewCommunityDetails = ({ token, account }) => {
  return (
    <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl mt-8">
      <div className="md:flex justify-center">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            ArtBlock
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            ABX
          </a>
          <p className="mt-2 text-gray-500">{token?.description}</p>
        </div>
        <div className="p-8 bg-gray-100 md:flex-shrink-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Token Details
            </h3>
            <dl className="mt-2">
              <dt className="text-sm font-medium text-gray-500">
                Total Supply
              </dt>
              <dd className="text-sm text-gray-900">12 ABX</dd>
              <dt className="text-sm font-medium text-gray-500 mt-3">Price</dt>
              <dd className="text-sm text-gray-900">1 ABX = 1 WEI</dd>
              <dt className="text-sm font-medium text-gray-500 mt-3">
                Price to launch new community
              </dt>
              <dd className="text-sm text-gray-900">1000 ABX</dd>
            </dl>
          </div>
        </div>
        {account !== null && <UserABXInfo />}
      </div>
    </div>
  );
};

export default NewCommunityDetails;
