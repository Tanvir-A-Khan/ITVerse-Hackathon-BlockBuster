// components/CommunityDetail/Myart.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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

const Myart = () => {
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
      <div className="container mx-auto  flex">
        {/* Community details on the right */}
      </div>

      {/* Display artworks that belong to the community */}
      <p className="mt-8 text-2xl font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md text-center">
        My Collection in {community.title}
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
                <Link to={`/sell/${index + 1}`}>
                  <button className="mt-2 bg-yellow-500 text-white py-2 px-10 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                   Sell item
                  </button>
                </Link>
                <Link to={`/auction/${index + 1}`}>
                  <button className="mt-2 bg-orange-500 text-white py-2 px-10 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                    Auction
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

export default Myart;
