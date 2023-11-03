import React, { useEffect, useState } from "react";

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

const PendingList = ({ communityId }) => {
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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">All Pending Posts in this community</h2>

      <div className="relative overflow-hidden" style={{ width: "100%" }}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {data.map((item, index) => (
            <div key={item.id} className="flex-none w-1/4 p-4 border">
              <img
                src={item.image}
                alt={item.title}
                className="w-64 h-64 object-cover mx-auto"
              />
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setCurrentIndex(
              currentIndex > 0 ? currentIndex - 1 : data.length - 4
            )
          }
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={showNextDiv}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PendingList;
