"use client";
import Sidebar from "@/components/Sidebar";
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

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
          <div className="px-5 py-5 flex-1 overflow-y-scroll space-y-2   h-screen scrollbar-hide  ">
            <div className=" flex space-x-5  text-white  ">
              <div className=" space-y-5 w-[800px]">
                <ReactPlayer
                  url="https://youtu.be/yxXzMqyHFJc"
                  controls="true"
                  width={800}
                  height={450}
                  className="  border-2  border-blue-700"
                />
                <div className=" space-y-5">
                  <div className=" flex space-x-10 px-2">
                    <p>10 views</p>
                    <AiOutlineLike size={28} />
                    <AiOutlineDislike size={28} />
                  </div>
                  <div className="flex space-x-5 items-center">
                    <img
                      src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                      className=" w-8 h-8 rounded-full object-cover "
                    />
                    <p className=" text-sm">Sudhanshu vats</p>
                  </div>
                </div>
                <p className=" text-sm">
                  An incredible tournament! Congratulations to Chennai. Tough to
                  see my @gujarat_titans teammates get so close, but the beauty
                  of sport prevails and these are all great opportunities to
                  continue to grow. The performance and spirit of this side
                  during the season is something to be proud of ❤️ #ipl
                </p>
              </div>
              <div className="bg-gray-700 rounded-lg shadow-md h-[700px] py-5 flex-1 px-5 ">
                <p>Recoomended</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
