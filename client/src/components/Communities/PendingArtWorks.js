import React, { useState } from "react";
import { useMethodsContext } from "../../contexts/methodsContext";

const PendingArtWorks = ({ item, id }) => {
  console.log(String(item[10]), Date.now());
  const { voteFinished, upVote, downVote } = useMethodsContext();

  //up vote and down vote
  //// need logic for preventing multiple votes from the same user
  const [downVoteCount, setDownVoteCount] = useState(0);
  const [upVoteCount, setUpVoteCount] = useState(0);

  const handleDownVote = async () => {
    await downVote(id, Number(item[0]));
    setDownVoteCount(downVoteCount + 1);
  };

  const handleUpVote = async () => {
    await upVote(id, Number(item[0]));
    setUpVoteCount(upVoteCount + 1);
  };

  const handleFinish = async () => {
    try {
      await voteFinished(id, Number(item[0]));
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className="flex-none w-1/4 p-4 border">
      <img
        src={`https://gateway.pinata.cloud/ipfs/${item[2]}`}
        alt="Img"
        className="w-64 h-64 object-cover mx-auto"
      />

      {String(item[10]) - Date.now() < 0 ? (
        <div className="w-40 flex items-center justify-between">
          {/* Left Div for Downvote */}
          <div className="flex items-center">
            <button
              className="px-1 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
              onClick={handleDownVote}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <span className="ml-2 text-m text-black-300">{downVoteCount}</span>{" "}
            {/* Display downvote count */}
          </div>

          {/* Right Div for Upvote */}
          <div className="flex items-center">
            <span className="ml-2 text-m text-black-300">{upVoteCount}</span>{" "}
            {/* Display upvote count */}
            <button
              className="px-1 py-1 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
              onClick={handleUpVote}
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div onClick={handleFinish}>Vote Finished</div>
      )}
    </div>
  );
};

export default PendingArtWorks;
