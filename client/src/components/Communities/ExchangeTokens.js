import React, { useState } from "react";
import { useMethodsContext } from "../../contexts/methodsContext";
import useUserABXInfo from "../../hooks/useUserABXInfo";

const ExchangeTokens = () => {
  const { value } = useUserABXInfo();
  const { exchangeABXwithCommunityNativeToken } = useMethodsContext();

  const [amountToExchange, setAmountToExchange] = useState("");
  const [isExchanging, setIsExchanging] = useState(false);
  const [exchangeRate] = useState(1); // 1 TokenA = 1 TokenB for example
  const [tokenType, setTokenType] = useState("AtoB"); // 'AtoB' or 'BtoA'

  const handleAmountChange = (event) => {
    setAmountToExchange(event.target.value);
  };

  const handleTokenTypeChange = (event) => {
    setTokenType(event.target.value);
  };

  const handleExchange = async (event) => {
    event.preventDefault();
    setIsExchanging(true);

    try {
      // Here you would include the logic to call the blockchain or backend service
      // to process the token exchange
      await exchangeABXwithCommunityNativeToken();
    } catch (error) {
      console.error("Exchange failed:", error);
      setIsExchanging(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Token Exchange</h2>
      <div>
        <p>You currently have {value}</p> ABX Token
      </div>
      <div>
        <p>You currently have {value}</p> Community Token Token
      </div>
      <form
        onSubmit={handleExchange}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amountToExchange}
            onChange={handleAmountChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="0.00"
            required
            min="0"
            step="any"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tokenType"
          >
            Exchange Type
          </label>
          <div className="relative">
            <select
              id="tokenType"
              value={tokenType}
              onChange={handleTokenTypeChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="0">ARX to {"community token"} </option>
              <option value="1">{"community token"} to ATX</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isExchanging}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isExchanging
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
          >
            {isExchanging ? "Exchanging..." : "Exchange"}
          </button>
          <div className="text-center">
            <p>
              Exchange Rate: 1 ABX = {exchangeRate} {"community token"}{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExchangeTokens;
