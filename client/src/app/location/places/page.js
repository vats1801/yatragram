import Map from "@/components/Map";
import List from "@/components/List";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-1 p-2 space-y-10  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
        <div className=" flex space-x-5  w-full">
          <div className=" w-[150px] py-3 text-center border rounded-md hover:bg-white hover:text-black border-white">
            <p>Hotels</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md  hover:bg-white hover:text-black border-white">
            <p>Restaurants</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md  hover:bg-white hover:text-black border-white">
            <p>Attractions</p>
          </div>
          <input
            type="search"
            placeholder=" Search Location"
            className="  flex-1 py-3 px-10 bg-gray-600 text-white rounded-xl"
          />
          <div className=" w-[150px] py-3 bg-gray-400 shadow-md text-blue-800 text-center  rounded-md">
            <p>Ladakh</p>
          </div>
        </div>
        <div className=" flex space-x-3">
          <List />
          <Map />
        </div>
      </div>
    </div>
  );
}
