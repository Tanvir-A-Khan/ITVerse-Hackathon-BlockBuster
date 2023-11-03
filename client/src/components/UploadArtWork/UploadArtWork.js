import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxNGY5ZGI5Mi03Y2NhLTQxOGUtYmYzMC1mMjhkYWM5OGFmODMiLCJlbWFpbCI6IndlYi5zaGFoaWR1bC5hbGFtQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJhYzdkM2JlMDY3MjA3ZmQ2NTE3MSIsInNjb3BlZEtleVNlY3JldCI6Ijk3YjlhMWIyYjcwZGEzNjM5NTM5MTlhYjY3NzczNTg0OGFhZTI0MjE0N2E4NzdjMzU0M2Y3M2Q5ZGY1OWI0ZDgiLCJpYXQiOjE2OTkwMjU0Njh9.ZwRcRrGqhW7H6bzSnDzFod1ZNh-t3DwRbKBswk3aVhA";

// https://gateway.pinata.cloud/ipfs/

const UploadArtWork = () => {
  const { id } = useParams();

  const [selectedFile,setSelectedFile] = useState(null);

  const [previewUrl,setPreviewUrl] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [uploading,setUploading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNFT = async (IpfsHash) => {

    const metaData = {
      title: "Asset Metadata",
      type: "object",
      properties: {
        name: {
          type: "string",
          description: "Identifies the asset to which this NFT represents",
        },
        description: {
          type: "string",
          description: "Describes the asset to which this NFT represents",
        },
        image: {
          type: "string",
          description: IpfsHash,
        },
      },
    };

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        JSON.stringify(metaData),
        {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': 'application/json',
             Authorization: JWT,
          },
        }
      );

      console.log(res.data);
      setUploading(false);
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("No file selected");
      return;
    }
    setUploading(true);

    // Perform upload logic here, e.g., make an API request

    const formData = new FormData();
    formData.append("file", selectedFile);

    const pinataMetadata = JSON.stringify({
      name: selectedFile.name,
    });
    formData.append("pinataMetadata", pinataMetadata);
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    });
    formData.append("pinataOptions", pinataOptions);

    try {
      const res = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: "Infinity",
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT,
          },
        }
      );
      console.log(res.data);
      await handleNFT(res.data.IpfsHash);
      // Reset the selected file
      // setSelectedFile(null);
      // setPreviewUrl(null);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center p-4 font-bold text-2xl">
        Upload your File
      </div>
      <p className="text-center mb-0 py-4 text-red-400">By Uploading You are agreeing to stake 100 Community Tokes for approval</p>
      <form onSubmit={handleUpload} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          {previewUrl && (
            <div className="mx-auto">
              <img
                src={previewUrl}
                alt="Preview"
                style={{ width: "250px", margin: "10px" }}
              />
            </div>
          )}
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
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400 disabled:text-white`}
              type="submit"
              disabled={uploading}
            >
              {uploading ?  "Uploading....."
              :
             " Submit"
              }
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadArtWork;
