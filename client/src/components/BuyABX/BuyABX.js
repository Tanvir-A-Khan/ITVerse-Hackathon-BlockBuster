import React, { useState } from "react";
import toast from "react-hot-toast";
import { useMethodsContext } from "../../contexts/methodsContext";
// You'll need to import your Web3 integration here

const BuyABX = () => {
  const [ethAmount, setEthAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { buyABX } = useMethodsContext();

  const handleInputChange = (e) => {
    setEthAmount(e.target.value);
  };

  const handleExchange = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await buyABX(ethAmount);
      setEthAmount("");
      toast.success("ABX Exchanged");
    } catch (error) {
      // Handle or display the error
      console.error("Exchange failed:", error);
      alert("Exchange failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-lg">
        <form
          onSubmit={handleExchange}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ethAmount"
            >
              Amount of WEI to exchange (in Decimal)
            </label>
            <input
              type="number"
              id="ethAmount"
              name="ethAmount"
              value={ethAmount}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="10"
              step="any"
              placeholder="0"
              required
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="ABXAmount"
            >
              Amount of ABX you will get (1 WEI = 1 ABX)
            </label>
            <input
              type="number"
              name="ABXAmount"
              value={ethAmount}
              className="shadow disabled:bg-gray-600 disabled:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              disabled
              min="0"
              step="any"
              placeholder="0"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Exchanging..." : "Exchange ETH for Tokens"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyABX;
