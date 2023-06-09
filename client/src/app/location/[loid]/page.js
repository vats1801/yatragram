import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-1 p-2 space-y-10  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
        <div className=" w-full h-[250px] relative">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
            className="w-full h-[250px] object-cover opacity-25"
          />
          <p className=" text-2xl w-[10%] absolute top-[100px] bottom-[100px] left-[45%] right-[45%]">
            <span className=" text-2xl text-red-600 mr-2">Explore</span>Ladakh
          </p>
        </div>
        <div className=" flex space-x-5 px-20 w-full justify-center">
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Travel Advice</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Hotels</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Things to Do</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Restaurants</p>
          </div>
        </div>
        <div className="  flex flex-wrap gap-3 px-20 w-full justify-center">
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
        </div>
      </div>
    </div>
  );
}
