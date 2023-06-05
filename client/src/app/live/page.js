"use client";
import CreatePost from "@/components/CreatePost";
import Sidebar from "@/components/Sidebar";
import UploadVideo from "@/components/UploadVideo";
import React, { useState } from "react";

export default function page() {
  const [type, setType] = useState(1);

  let live = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      creator: {
        name: "sudhanshu vats",
        image: "",
        id: 1,
      },
    },
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      creator: {
        name: "sudhanshu vats",
        image: "",
        id: 1,
      },
    },
  ];
  return (
    <div className=" flex">
      <Sidebar />

      <div className="px-20 py-10 flex-1 overflow-y-scroll grid grid-cols-3 gap-3  h-screen scrollbar-hide  ">
        {live.map((l, i) => (
          <div className=" relative w-[350px] h-[250px] border-4 border-red-800 rounded-lg ">
            <img
              src={l.thumbnail}
              className=" w-full h-full rounded-lg object-cover"
            />
            <p className="px-2 py-1 text-center rounded-lg text-sm absolute w-12 top-5 right-5 bg-red-800 text-white">
              Live
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
