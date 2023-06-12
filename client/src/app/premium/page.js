import Sidebar from "@/components/Sidebar";
import React from "react";
import { TiTick } from "react-icons/ti";

export default function page() {
  return (
    <div className=" flex">
      <Sidebar />

      <div className="px-20 py-10 flex-1 flex justify-center items-center overflow-y-scroll   h-screen scrollbar-hide  ">
        <div className=" border-2 rounded-xl flex flex-col items-center border-yellow-700 bg-white text-black space-y-10 px-5 py-5 w-[30%]">
          <h1 className=" font-semibold">Premium</h1>
          <p className="text-yellow-700 font-bold text-xl">499</p>

          <div className=" space-y-3">
            <div className="flex space-x-3">
              <TiTick size={25} /> <p>Discount on Packages</p>
            </div>
            <div className="flex space-x-3">
              <TiTick size={25} /> <p>Influencer premium stream</p>
            </div>
            <div className="flex space-x-3">
              <TiTick size={25} /> <p>Influencer premium post</p>
            </div>
            <div className="flex space-x-3">
              <TiTick size={25} /> <p> Verified Golden Tick</p>
            </div>
          </div>

          <button className=" px-10 py-2 text-white bg-blue-700 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
