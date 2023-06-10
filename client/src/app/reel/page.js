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
  const [play, setPlay] = useState(false);

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
            <div className="    relative ">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/TAG%20A%20HOLI%20LOVER%20%20Holi%20is%20around%20the%20corner%20so%20I%20am%20sharing%20a%20few%20shots%20from%20my%20last%20year%E2%80%99s%20crazy%20holi%20experience.%20Already%20in%20FOMO%20as%20I%20wouldnt%20be%20in%20India%20to%20celebrate%20holi%20Aapki%20holi%20party%20kaha%20hai%20.mp4?alt=media&token=57cb59f4-3bf4-4a1f-bbf5-0ecd2f7e1041&_gl=1*x5xts9*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzk1OTQuMC4wLjA."
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
            <div className="    relative ">
              <ReactPlayer
                url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/When%20someone%20asks%20what%20is%20in%20your%20Uttarakhand!...%23himalayasin%20%23chalotripkarein%20%23thehimalayanlife%20%23devbhoomi%20%23uttarakhand%20%23uttarakhandheaven%20%23devbhoomiuttarakhand.mp4?alt=media&token=7a771ce9-6a03-42b0-97cc-364a684f5ec0&_gl=1*ha5wx3*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzg2OTQuMC4wLjA."
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
