import React from "react";
import { useParams } from "react-router-dom";
import useGetArt from "../../hooks/useGetArt";

const ArtworkDetail = () => {
  const { id } = useParams();

  const { data } = useGetArt(id, 0);

  const handleBuyClick = (artworkId) => {
    // Define the functionality when the 'Buy' button is clicked
    console.log(`Buy button clicked for artwork ID: ${artworkId}`);
    // Implement the buy functionality here (e.g., redirect to a purchase page, add to cart, etc.)
  };

  return (
    <div className="container mx-auto p-4 flex">
      {/* Image on the left */}
      <div className="w-1/2 pr-6">
        <img
          src={`https://gateway.pinata.cloud/ipfs/${data[2]}`}
          alt="1"
          className="w-80 h-150 object-cover mx-auto object-cover shadow-lg rounded-md"
        />
      </div>
      <div>
        <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">
          Price: {Number(data[7])}
        </p>

        {/* Other artwork details */}
        <button
          onClick={() => handleBuyClick(data.id)}
          className="bg-gray-500 text-white py-2 px-24 rounded-md mt-3"
        >
          Not Available for Sale
        </button>
      </div>
    </div>
  );
};

export default ArtworkDetail;
