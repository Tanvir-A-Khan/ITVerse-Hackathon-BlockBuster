// components/CommunityDetail/CommunityDetail.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetCommunity from "../../hooks/useGetCommunity";
import useGetCommunityArts from "../../hooks/useGetCommunityArts";
import useGetPendingArts from "../../hooks/useGetPendingArts";
import CommunityArtWorks from "./CommunityArtWorks";
import PendingArtWorks from "./PendingArtWorks";

// no event handler for the Upload and Buy Community Native Token

const CommunityDetail = () => {
  const { id } = useParams();
  const { community, loading: communityLoading } = useGetCommunity(id);
  const { pendingArts, loading: pendingArtsLoading } = useGetPendingArts(id);
  const { communityArts, loading: communityArtsLoading } =
    useGetCommunityArts(id);

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextDiv = () => {
    if (currentIndex < pendingArts.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(showNextDiv, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="mt-5 container mx-auto  flex">
        {/* Image on the left */}
        <div className="relative overflow-hidden" style={{ width: "60%" }}>
          <p className="mt-1 text-3xl mb-2 font-bold text-yellow-600 inline-block animate-pulse">
            Community Art Voting
          </p>
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {!pendingArtsLoading &&
              pendingArts.map((item, index) => (
                <PendingArtWorks key={index} item={item} id={id} />
              ))}
          </div>
        </div>

        {/* Community details on the right */}
        <div className="w-1/2 pl-6 flex flex-col justify-between">
          <div>
            <h2 className="mt-10 text-3xl mb-4 font-bold">{community.title}</h2>
            <Link to={`/myart/${community.id}`}>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                My Collection
              </button>
            </Link>
            <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
              {community[3]}
            </p>
            <p className="mt-6 text-xl font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
              Token ID: {community[4]}
            </p>
          </div>
          <div div style={{ display: "flex", gap: "30px" }}>
            <p className="mt-4 text-xl mb-4 font-bold">
              Upload to the community
            </p>
            <Link
              to={`/community/uploadArt/${id}`}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            >
              Upload
            </Link>
            <Link
              to={`/community/exchange/${id}`}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            >
              Buy Community Native Token
            </Link>
          </div>
        </div>
      </div>

      {/* Display artworks that belong to the community */}
      <p className="mt-8 text-2xl font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md text-center">
        Art of {community.title}
      </p>
      <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {!communityArtsLoading &&
          communityArts
            .slice(0, 10)
            .map((art, index) => <CommunityArtWorks key={index} art={art} />)}
      </div>
    </>
  );
};

export default CommunityDetail;
