"use client";
import Sidebar from "@/components/Sidebar";
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineHeart,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";

export default function page() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className=" flex">
      {domLoaded && (
        <>
          {" "}
          <Sidebar />
          <div className="px-5 py-10 flex-1 space-y-12 flex flex-col items-center  overflow-y-scroll   h-screen scrollbar-hide  ">
            <div className="   border-2 relative border-blue-700">
              <ReactPlayer
                url="https://youtu.be/yxXzMqyHFJc"
                controls="true"
                width={350}
                height={650}
              />
              <div className=" absolute space-y-10 font-bold    right-5 top-[400px]">
                <AiOutlineHeart size={25} />
                <AiOutlineMessage size={25} />

                <BsBookmark size={25} />
              </div>
              <div className=" absolute top-[580px] left-5 flex space-x-5 items-center  ">
                <img
                  src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                  className=" w-8 h-8 rounded-full object-cover"
                />
                <div className=" font-bold">
                  <p className=" text-sm">Sudhanshu vats</p>
                  <p className=" text-sm">comment</p>
                </div>
              </div>
            </div>
            <div className="   border-2 relative border-blue-700">
              <ReactPlayer
                url="https://youtu.be/yxXzMqyHFJc"
                controls="true"
                width={350}
                height={650}
              />
              <div className=" absolute space-y-10 font-bold    right-5 top-[400px]">
                <AiOutlineHeart size={25} />
                <AiOutlineMessage size={25} />

                <BsBookmark size={25} />
              </div>
              <div className=" absolute top-[580px] left-5 flex space-x-5 items-center  ">
                <img
                  src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                  className=" w-8 h-8 rounded-full object-cover"
                />
                <div className=" font-bold">
                  <p className=" text-sm">Sudhanshu vats</p>
                  <p className=" text-sm">comment</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
