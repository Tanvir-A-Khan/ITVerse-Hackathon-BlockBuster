import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMethodsContext } from "../../contexts/methodsContext";
import useCategories from "../../hooks/useCategories";

const NewCommunityForm = () => {
  const { categories, loading } = useCategories();

  const { createCommunity } = useMethodsContext();

  const [formData, setFormData] = useState({
    communityName: "",
    communityDescription: "",
    communityTokenName: "",
    communityTokenSymbol: "",
    communityInitialSupply: "",
    communityTypeId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        communityName,
        communityDescription,
        communityTokenName,
        communityTokenSymbol,
        communityInitialSupply,
        communityTypeId,
      } = formData;
      await createCommunity(
        communityName,
        communityTypeId,
        communityDescription,
        communityTokenName,
        communityTokenSymbol,
        communityInitialSupply
      );
      toast.success("Community Creation Successful");
    } catch (err) {
      console.log(err);
      toast.error("Community Creation Failed");
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[1000px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityName"
            >
              Community Name
            </label>
            <input
              type="text"
              name="communityName"
              id="communityName"
              onChange={handleChange}
              value={formData.communityName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityDescription"
            >
              Community Description
            </label>
            <textarea
              name="communityDescription"
              id="communityDescription"
              onChange={handleChange}
              value={formData.communityDescription}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityTokenName"
            >
              Community Token Name
            </label>
            <input
              type="text"
              name="communityTokenName"
              id="communityTokenName"
              onChange={handleChange}
              value={formData.communityTokenName}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityTokenSymbol"
            >
              Community Token Symbol
            </label>
            <input
              type="text"
              name="communityTokenSymbol"
              id="communityTokenSymbol"
              onChange={handleChange}
              value={formData.communityTokenSymbol}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityInitialSupply"
            >
              Community Initial Supply
            </label>
            <input
              type="number"
              name="communityInitialSupply"
              id="communityInitialSupply"
              onChange={handleChange}
              value={formData.communityInitialSupply}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0"
              step="1"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="communityTypeId"
            >
              Community Type
            </label>
            {!loading && (
              <select
                name="communityTypeId"
                id="communityTypeId"
                onChange={handleChange}
                value={formData.communityTypeId}
                className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                {categories.map((item, index) => (
                  <option value={index} key={index}>
                    {item}
                  </option>
                ))}
                {/* Add more options as needed */}
              </select>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Community
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCommunityForm;
