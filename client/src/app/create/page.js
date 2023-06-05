"use client";
import CreatePost from "@/components/CreatePost";
import GoLive from "@/components/GoLive";
import Sidebar from "@/components/Sidebar";
import UploadVideo from "@/components/UploadVideo";
import React, { useEffect, useState } from "react";

export default function page() {
  const [type, setType] = useState(1);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className=" flex">
      {domLoaded && (
        <>
          <Sidebar />

          <div className="px-10 py-10 flex-1 flex overflow-y-scroll space-x-10 h-screen scrollbar-hide  ">
            <div className=" space-y-5 w-[200px]">
              <div className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600">
                <button>Create story</button>
              </div>
              <div
                onClick={() => setType(1)}
                className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600"
              >
                <button>Create post</button>
              </div>
              <div
                onClick={() => setType(2)}
                className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600"
              >
                <button>Upload vlog</button>
              </div>
              <div className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600">
                <button>Upload reel</button>
              </div>
              <div
                onClick={() => setType(3)}
                className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600"
              >
                <button>Go live</button>
              </div>
              <div className=" bg-gray-700 rounded-lg w-[150px] h-[100px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600">
                <button>Write blog</button>
              </div>
            </div>
            <div className="flex-1 flex justify-center pt-20">
              {type === 1 ? <GoLive /> : <UploadVideo />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
