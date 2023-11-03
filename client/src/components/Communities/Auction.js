import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Auction = () => {
  const { id } = useParams();
  const [startingPrice, setStartingPrice] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

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
    console.log(`Auction button clicked for artwork ID: ${artworkId}`);
    // Implement the buy functionality here (e.g., redirect to a purchase page, add to cart, etc.)
  };

  const handleStartingPriceChange = e => {
    const price = e.target.value;
    if (!isNaN(parseFloat(price)) && parseFloat(price) >= 0) {
      setStartingPrice(price);
    }
  };

  const handleDiscountRateChange = e => {
    const rate = e.target.value;
    if (!isNaN(parseFloat(rate)) && parseFloat(rate) >= 0) {
      setDiscountRate(rate);
    }
  };

  const handleStartTimeChange = e => {
    // Perform the necessary actions to handle the start time (calendar date picker)
    // Example: Set the start time using a date picker library or native HTML input type="date"
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = e => {
    // Perform the necessary actions to handle the end time (calendar date picker)
    // Example: Set the end time using a date picker library or native HTML input type="date"
    setEndTime(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 flex">
      {/* Image on the left */}
      <div className="w-1/2 pr-6">
        <img
          src={selectedArtwork.imageUrl}
          alt={selectedArtwork.artName}
          className="w-80 h-150 object-cover mx-auto object-cover shadow-lg rounded-md"
        />
      </div>
      <div>
      <p className="mt-1 text-3xl mb-2 font-bold text-yellow-600 inline-block animate-pulse">
            Dutch Auction
          </p>
        <h2 className="text-3xl mb-4 font-bold">Auction for {selectedArtwork.artName}</h2>
        <label htmlFor="startingPrice" className="block mt-4 mb-2 text-black-700 font-bold">Starting Price</label>
        <input
          type="number"
          id="startingPrice"
          value={startingPrice}
          onChange={handleStartingPriceChange}
          placeholder="Enter Starting Price"
          className="px-14 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange"
        />

        <label htmlFor="discountRate" className="block mt-4 mb-2 text-black-700 font-bold">Discount Rate</label>
        <input
          type="number"
          id="discountRate"
          value={discountRate}
          onChange={handleDiscountRateChange}
          placeholder="Enter Discount Rate"
          className="px-14 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange"
        />

        <label htmlFor="startTime" className="block mt-4 mb-2 text-gray-700 font-bold">Starting Time</label>
        <input
          type="date"
          id="startTime"
          value={startTime}
          onChange={handleStartTimeChange}
          className="px-20 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange"
        />

        <label htmlFor="endTime" className="block mt-4 mb-2 text-gray-700 font-bold">Ending Time</label>
        <input
          type="date"
          id="endTime"
          value={endTime}
          onChange={handleEndTimeChange}
          className="px-20 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange"
        />

        <div>
          <button onClick={() => handleBuyClick(selectedArtwork.id)} className="bg-orange-500 font-bold text-white py-2 px-24 rounded-md mt-4">
            Confirm Auction
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auction;
