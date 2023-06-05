"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

export default function page() {
  const [type, setType] = useState(1);
  return (
    <div className=" flex">
      <Sidebar />

      <div className="px-40 py-10 flex-1 overflow-y-scroll h-screen scrollbar-hide">
        <div className="  w-full space-x-40 border-b border-b-gray-400 flex px-20 pb-10 ">
          <img
            className=" rounded-full w-[150px] h-[150px] object-cover"
            src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
          />
          <div className=" space-y-3">
            <div className=" flex space-x-10 py-2 ">
              <p>_vats_</p>
              <button className=" px-5 py-1  bg-blue-600 rounded-lg text-white ">
                Follow
              </button>
            </div>

            <div className=" flex space-x-10 py-2 ">
              <p>1 posts</p>
              <p>100 Followers </p>
              <p>20 Following</p>
            </div>
            <div className=" space-y-1 text-sm">
              <p className="text-sm">Sudhanshu vats</p>
              <p className="text-sm">Wanderer Lust</p>
            </div>
          </div>
        </div>
        <div className=" flex space-x-5 mt-2">
          <p className=" px-5 py-3 border-b-2 border-b-white ">Posts</p>
          <p className=" px-5 py-3 ">Saved</p>
          <p className=" px-5 py-3 ">Reels</p>
        </div>
        <div
          className="px-5 grid  grid-cols-3 gap-5 mt-10 
        "
        >
          <img
            className="  w-[300px] h-[300px] object-cover"
            src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
          />
          <img
            className="   w-[300px] h-[300px] object-cover"
            src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
          />
          <img
            className="   w-[300px] h-[300px] object-cover"
            src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
          />
          <img
            className="   w-[300px] h-[300px] object-cover"
            src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
          />
        </div>
      </div>
    </div>
  );
}
