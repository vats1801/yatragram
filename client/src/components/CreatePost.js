"use client";
import React, { useState } from "react";

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState(null);

  const handleUpload = () => {
    if (!file || !caption) return;
  };

  return (
    <div className="space-y-10  flex flex-col items-center">
      <img
        src="https://wallpapercave.com/wp/wp7029244.jpg"
        className=" w-[350px] h-[300px] object-cover"
      />
      <input
        type="text"
        placeholder="Write caption"
        className=" px-5 py-5 bg-gray-600 rounded-lg text-white outline-none w-full "
        onChange={(e) => setCaption(e.target.value)}
      />
      <div className=" flex px-5 py-2 justify-between">
        <input
          type="file"
          className=" px-5 py-2  rounded-lg text-white  "
          onChange={(e) => setFile(e.target.value)}
        />

        <button
          className=" px-5 py-2 text-white bg-gray-700 rounded-lg"
          onClick={handleUpload}
        >
          Create Post
        </button>
      </div>
    </div>
  );
}
