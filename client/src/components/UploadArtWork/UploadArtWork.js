import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UploadArtWork = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement what happens when the form is submitted
    console.log({ file, price, category });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center p-4 font-bold text-2xl">
        Upload your File
      </div>
      <p className="text-center mb-0 py-4 text-red-400">By Uploading You are agreeing to stake 100 Community Tokes for approval</p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="file-upload"
            >
              File Upload
            </label>
            <input
            required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
            required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="price"
              type="text"
              placeholder="0.00"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="0">General</option>
                <option value="1">Premium</option>
                {/* Add more categories as needed */}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadArtWork;
