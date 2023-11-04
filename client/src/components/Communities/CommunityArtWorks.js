import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommunityArtWorks = ({ art, index }) => {
  const [hoveredArtwork, setHoveredArtwork] = useState(null);

  return (
    <div
      className="p-4 border rounded-md shadow-sm bg-white relative"
      onMouseEnter={() => setHoveredArtwork(index)} // When mouse enters the div
      onMouseLeave={() => setHoveredArtwork(null)} // When mouse leaves the div
    >
      <img
        src={`https://gateway.pinata.cloud/ipfs/${art[2]}`}
        alt="Art"
        className="w-64 h-64 object-cover mb-4 rounded-md"
      />
      <p>
        <strong>Owner Address:</strong> {art[5]}
      </p>
      <p>
        <strong>Price:</strong> {Number(art[7])}
      </p>
      <p>
        <strong>Category:</strong> {art[9] ? "Exclusive" : "General"}
      </p>

      {/* This is the hover overlay div */}
      {hoveredArtwork === index && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          {/* You can add more details here */}
          <p>{art.description}</p> {/* Assuming there is a description field */}
          <Link to={`/artwork/${Number(art[1])}/${Number(art[0])}`}>
            <button className="mt-2 bg-blue-500 text-white py-2 px-8 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
              More details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommunityArtWorks;
