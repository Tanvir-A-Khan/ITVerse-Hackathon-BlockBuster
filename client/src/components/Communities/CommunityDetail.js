// components/CommunityDetail/CommunityDetail.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// no event handler for the Upload and Buy Community Native Token

const data = [
  {
    id: 1,
    title: "Artme",
    description: "A decentralized Community for digital art.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 2,
    title: "NFT Artwork",
    description: "A unique digital artwork stored on the blockchain.",
    image:
      "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/love-vortex-and-the-3rd-eye-ali-sabet.jpg",
  },
  {
    id: 3,
    title: "Crypto Gallery",
    description: "Showcase of top crypto-themed artworks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0-NM7O0qXTJnN0Q7kqiHa-RCPB6d0DVRxaRhFTRABbCIg_p6BZsO0mW0LM6kqraIW14&usqp=CAU",
  },
  {
    id: 4,
    title: "Blockchain Vision",
    description: "The future of technology and data.",
    image:
      "https://i0.wp.com/usethebitcoin.com/wp-content/uploads/2022/07/nft.webp?fit=1024%2C536&ssl=1",
  },
  {
    id: 5,
    title: "Decentraland",
    description: "Virtual world powered by the Ethereum blockchain.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 6,
    title: "Token Tower",
    description: "A tower of digital assets and innovations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 7,
    title: "Metaverse Museum",
    description: "A museum dedicated to digital innovations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 8,
    title: "Crypto Castle",
    description: "A castle representing the strength of cryptocurrencies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
];

// Approval Data
const Approval_data = [
  {
    id: 1,
    title: "Artme",
    description: "A decentralized Community for digital art.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 2,
    title: "NFT Artwork",
    description: "A unique digital artwork stored on the blockchain.",
    image:
      "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/love-vortex-and-the-3rd-eye-ali-sabet.jpg",
  },
  {
    id: 3,
    title: "Crypto Gallery",
    description: "Showcase of top crypto-themed artworks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0-NM7O0qXTJnN0Q7kqiHa-RCPB6d0DVRxaRhFTRABbCIg_p6BZsO0mW0LM6kqraIW14&usqp=CAU",
  },
  {
    id: 4,
    title: "Blockchain Vision",
    description: "The future of technology and data.",
    image:
      "https://i0.wp.com/usethebitcoin.com/wp-content/uploads/2022/07/nft.webp?fit=1024%2C536&ssl=1",
  },
  {
    id: 5,
    title: "Decentraland",
    description: "Virtual world powered by the Ethereum blockchain.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 6,
    title: "Token Tower",
    description: "A tower of digital assets and innovations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 7,
    title: "Metaverse Museum",
    description: "A museum dedicated to digital innovations.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
  {
    id: 8,
    title: "Crypto Castle",
    description: "A castle representing the strength of cryptocurrencies.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU",
  },
];

const artworkData = [
  {
    artName: "Artwork 1",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 2",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 3",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 4",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 5",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 6",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 7",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 8",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 9",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
  {
    artName: "Artwork 10",
    walletAddress: "0x1234...abcd",
    price: "1.2 ETH",
    category: "Digital",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU", // <-- This is the new image property
  },
];

const CommunityDetail = () => {
  //up vote and down vote
  //// need logic for preventing multiple votes from the same user
  const [downVoteCount, setDownVoteCount] = useState(0);
  const [upVoteCount, setUpVoteCount] = useState(0);

  const handleDownVote = () => {
    setDownVoteCount(downVoteCount + 1);
  };
  const handleUpVote = () => {
    setUpVoteCount(upVoteCount + 1);
  };

  let { id } = useParams(); // get the id from the URL params
  const community = data.find((item) => item.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextDiv = () => {
    if (currentIndex < data.length - 4) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(showNextDiv, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const [hoveredArtwork, setHoveredArtwork] = useState(null);
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
            {Approval_data.map((item, index) => (
              <div key={item.id} className="flex-none w-1/4 p-4 border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-64 h-64 object-cover mx-auto"
                />
                <h3 className="mt-2 font-bold">{item.title}</h3>

                <div className="w-40 flex items-center justify-between">
                  {/* Left Div for Downvote */}
                  <div className="flex items-center">
                    <button
                      className="px-1 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
                      onClick={handleDownVote}
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <span className="ml-2 text-m text-black-300">
                      {downVoteCount}
                    </span>{" "}
                    {/* Display downvote count */}
                  </div>

                  {/* Right Div for Upvote */}
                  <div className="flex items-center">
                    <span className="ml-2 text-m text-black-300">
                      {upVoteCount}
                    </span>{" "}
                    {/* Display upvote count */}
                    <button
                      className="px-1 py-1 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
                      onClick={handleUpVote}
                    >
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
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
              {community.description}
            </p>
            <p className="mt-6 text-xl font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
              Token ID: {community.id}
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
        {artworkData.slice(0, 10).map((art, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-sm bg-white relative"
            onMouseEnter={() => setHoveredArtwork(index)} // When mouse enters the div
            onMouseLeave={() => setHoveredArtwork(null)} // When mouse leaves the div
          >
            <img
              src={art.image}
              alt={art.artName}
              className="w-64 h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="font-semibold mb-2">{art.artName}</h3>
            <p>
              <strong>Wallet Address:</strong> {art.walletAddress}
            </p>
            <p>
              <strong>Price:</strong> {art.price}
            </p>
            <p>
              <strong>Category:</strong> {art.category}
            </p>

            {/* This is the hover overlay div */}
            {hoveredArtwork === index && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                {/* You can add more details here */}
                <h3 className="font-bold mb-2">{art.artName}</h3>
                <p>{art.description}</p>{" "}
                {/* Assuming there is a description field */}
                <Link to={`/artwork/${index + 1}`}>
                  <button className="mt-2 bg-blue-500 text-white py-2 px-8 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                    More details
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CommunityDetail;
