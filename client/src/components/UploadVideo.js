import React from "react";
import ReactPlayer from "react-player";

export default function UploadVideo() {
  return (
    <div className=" space-y-5 w-[1000px]">
      <div className=" flex space-x-10 justify-center">
        <input
          type="file"
          className=" px-5 py-2  rounded-lg text-white  "
          onChange={(e) => setFile(e.target.value)}
        />
        <input
          type="file"
          className=" px-5 py-2  rounded-lg text-white  "
          onChange={(e) => setFile(e.target.value)}
        />
      </div>
      <div className=" flex space-x-5 w-full">
        <ReactPlayer
          url="https://youtu.be/yxXzMqyHFJc"
          controls="true"
          width={700}
          height={400}
          className=" w-[350px] h-[300px] border-2 border-blue-700"
        />

        <img
          src="https://wallpapercave.com/wp/wp7029244.jpg"
          className=" w-[350px] h-[300px] object-cover"
        />
      </div>

      <input
        type="text"
        placeholder="Write Description"
        className=" px-5 py-5 bg-gray-600 rounded-lg text-white outline-none w-full "
        onChange={(e) => setCaption(e.target.value)}
      />
      <input
        type="text"
        placeholder="Write Title"
        className=" px-5 py-5 bg-gray-600 rounded-lg text-white outline-none w-full "
        onChange={(e) => setCaption(e.target.value)}
      />

      <button className=" px-5 py-2 text-white bg-gray-700 rounded-lg">
        upload video
      </button>
    </div>
  );
}
