"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [type, setType] = useState();

  const router = useRouter();

  let vlogs = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
  ];
  const handleClick = (id) => {
    router.push(`/vlog/${id}`);
  };
  return (
    <div className=" flex">
      <Sidebar />

      <div className="px-20 py-10 flex-1 overflow-y-scroll space-y-5   h-screen scrollbar-hide  ">
        <div className=" flex flex-wrap gap-5 ">
          <div className=" bg-gray-700 rounded-lg w-[200px] h-[50px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600">
            <button>All</button>
          </div>
          <div
            onClick={() => setType(1)}
            className=" bg-gray-700 rounded-lg w-[200px] h-[50px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600"
          >
            <button>Following</button>
          </div>
          <div
            onClick={() => setType(2)}
            className=" bg-gray-700 rounded-lg w-[200px] h-[50px] flex justify-center items-center space-y-5 hover:border-2 hover:border-blue-600"
          >
            <button>Trending</button>
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-5">
          {vlogs.map((v, i) => (
            <div
              onClick={() => handleClick(v.id)}
              className=" relative w-[350px] h-[250px] space-y-5 0  rounded-lg "
            >
              <img
                src={v.thumbnail}
                className=" w-full h-full rounded-lg object-cover hover:border-4 hover:border-blue-800"
              />
              <div className="flex space-x-5 items-center">
                <img
                  src={v.user.image}
                  className=" w-8 h-8 rounded-full object-cover "
                />
                <p className=" text-sm">{v.user.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
