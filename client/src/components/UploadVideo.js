import React from "react";
import ReactPlayer from "react-player";

export default function UploadVideo() {
  return (
    <div className="space-y-10  flex flex-col items-center">
      <ReactPlayer
        url="https://youtu.be/yxXzMqyHFJc"
        controls="true"
        className=" w-[350px] h-[300px] border-2 border-blue-700"
      />
      <input
        type="text"
        placeholder="Write Description"
        className=" px-5 py-5 bg-gray-600 rounded-lg text-white outline-none w-full "
      />
      <button className=" px-5 py-2 text-white bg-gray-700 rounded-lg">
        upload video
      </button>
    </div>
  );
}
