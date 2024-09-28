"use client";
import React, { useState } from "react";

const ImageUpload = () => {
  // State variables to manage selected file, image preview, inventory list, and messages
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [inventoryList, setInventoryList] = useState([]);
  const [message, setMessage] = useState("");

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImagePreview(null); // Reset the preview
    setInventoryList([]); // Reset inventory list
    setMessage(""); // Reset message
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // Send POST request to the server using fetch
      const res = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Parse the JSON response
      const data = await res.json();
      console.log("Server Response:", data);

      // Display the image and inventory list
      if (data.image) {
        setImagePreview(`data:image/png;base64,${data.image}`);
      } else {
        setImagePreview(null); // Clear the image preview if no image is found
      }

      if (data.inventory && data.inventory.length > 0) {
        setInventoryList(data.inventory);
        setMessage(""); // Clear any previous message
      } else {
        setInventoryList([]);
        setMessage("No inventory data found"); // Set the message when no data is found
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="flex justify-center flex-wrap flex-col items-center space-y-10">
      <div className="w-3/5 space-y-6">
        <h2 className="sm:text-xl text-lg">
          Upload a picture of your fridge (or any image containing food), and
          the system will identify the visible ingredients in the image along
          with an estimated quantity of each item
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex items-start flex-col space-y-5"
        >
          <input
            className=""
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button
            type="submit"
            className=" bg-stone-100 py-1 px-2 text-sm rounded-sm border-solid border-gray-800 border"
          >
            Upload
          </button>
        </form>
        {message && (
          <div className="mt-4 ml-5">
            <p>{message}</p>
          </div>
        )}
        {/* Display the inventory list */}
        {inventoryList.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Detected Items:</h3>
            <ul className="ml-5 mt-4 list-none">
              {inventoryList.map((item, index) => (
                <li key={index}>
                  {item.Item}: {item.Count}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Display the image preview */}
        {imagePreview && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Detected Image:</h3>
            <img src={imagePreview} alt="Uploaded" className="mt-4" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
