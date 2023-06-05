import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className=" flex">
      <Sidebar />

      <div className="px-20 py-10 flex-1 overflow-y-scroll  h-screen scrollbar-hide  ">
        <div className=" flex space-x-10 py-10 h-16 items-center w-full  ">
          <input
            type="search"
            placeholder=" Search People and Places"
            className="  w-4/5 px-10 py-5 bg-gray-600 text-white rounded-xl"
          />
          <button className=" w-1/5 px-5 py-2 bg-blue-700 text-white rounded-lg">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
