import React from 'react';
import { useParams } from 'react-router-dom';

const ArtworkDetail = () => {
  const { id } = useParams();

  const artworkData = [
    {
      id: 1,
      artName: 'Artwork 1',
      price: '1.2 ETH',
      category: 'Digital art',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU', // Replace with actual image URL
      // Add other properties as needed
    },
    {
      id: 2,
      artName: 'Artwork 2',
      price: '1.2 ETH',
      category: 'Digital art',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJM0LhYctshdBQqi4EVAoqHFHa6OlIziPIToK8VWKXt6K-EzhukFH5vfd6tkjY9g4J1HA&usqp=CAU', // Replace with actual image URL
      // Add other properties as needed
    },
    // Add more artwork objects as required
  ];

  const selectedArtwork = artworkData.find(artwork => artwork.id === parseInt(id));

  if (!selectedArtwork) {
    return <div>Artwork not found</div>;
  }

  const handleBuyClick = artworkId => {
    // Define the functionality when the 'Buy' button is clicked
    console.log(`Buy button clicked for artwork ID: ${artworkId}`);
    // Implement the buy functionality here (e.g., redirect to a purchase page, add to cart, etc.)
  };

  return (
    <div className="container mx-auto p-4 flex">
     {/* Image on the left */}
    <div className="w-1/2 pr-6">
    <img src={selectedArtwork.imageUrl} alt={selectedArtwork.artName} className="w-80 h-150 object-cover mx-auto object-cover shadow-lg rounded-md" />
    </div>
      <div>
      <h2 className="text-3xl mb-4 font-bold">{selectedArtwork.artName}</h2>
      <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">ID: {selectedArtwork.id}</p>
      <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">Price: {selectedArtwork.price}</p>
      <p className="mt-4 text-lg font-medium leading-relaxed text-gray-700 bg-gray-100 p-4 rounded-md shadow-md">Category: {selectedArtwork.category}</p>
        
        {/* Other artwork details */}
        <button onClick={() => handleBuyClick(selectedArtwork.id)} className="bg-blue-500 text-white py-2 px-24 rounded-md mt-3">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ArtworkDetail;