"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function page() {
  const [type, setType] = useState("posts");

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
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
              <p
                onClick={() => setType("posts")}
                className={`px-5 py-5 ${
                  type === "posts" && "border-b-2 border-b-white"
                }`}
              >
                Posts
              </p>
              <p
                onClick={() => setType("reels")}
                className={`px-5 py-5 ${
                  type === "reels" && "border-b-2 border-b-white"
                }`}
              >
                Reels
              </p>
              <p
                onClick={() => setType("vlogs")}
                className={`px-5 py-5 ${
                  type === "vlogs" && "border-b-2 border-b-white"
                }`}
              >
                vlogs
              </p>
            </div>

            {type === "posts" ? (
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
            ) : (
              <div
                className="px-5 grid  grid-cols-3 gap-5 mt-10 
        "
              >
                <ReactPlayer
                  url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/When%20someone%20asks%20what%20is%20in%20your%20Uttarakhand!...%23himalayasin%20%23chalotripkarein%20%23thehimalayanlife%20%23devbhoomi%20%23uttarakhand%20%23uttarakhandheaven%20%23devbhoomiuttarakhand.mp4?alt=media&token=7a771ce9-6a03-42b0-97cc-364a684f5ec0&_gl=1*ha5wx3*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzg2OTQuMC4wLjA."
                  controls={false}
                  width={250}
                  height={350}
                />
                <ReactPlayer
                  url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/When%20someone%20asks%20what%20is%20in%20your%20Uttarakhand!...%23himalayasin%20%23chalotripkarein%20%23thehimalayanlife%20%23devbhoomi%20%23uttarakhand%20%23uttarakhandheaven%20%23devbhoomiuttarakhand.mp4?alt=media&token=7a771ce9-6a03-42b0-97cc-364a684f5ec0&_gl=1*ha5wx3*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzg2OTQuMC4wLjA."
                  controls={false}
                  width={250}
                  height={350}
                />
                <ReactPlayer
                  url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/When%20someone%20asks%20what%20is%20in%20your%20Uttarakhand!...%23himalayasin%20%23chalotripkarein%20%23thehimalayanlife%20%23devbhoomi%20%23uttarakhand%20%23uttarakhandheaven%20%23devbhoomiuttarakhand.mp4?alt=media&token=7a771ce9-6a03-42b0-97cc-364a684f5ec0&_gl=1*ha5wx3*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzg2OTQuMC4wLjA."
                  controls={false}
                  width={250}
                  height={350}
                />
                <ReactPlayer
                  url="https://firebasestorage.googleapis.com/v0/b/yatragram-ae439.appspot.com/o/When%20someone%20asks%20what%20is%20in%20your%20Uttarakhand!...%23himalayasin%20%23chalotripkarein%20%23thehimalayanlife%20%23devbhoomi%20%23uttarakhand%20%23uttarakhandheaven%20%23devbhoomiuttarakhand.mp4?alt=media&token=7a771ce9-6a03-42b0-97cc-364a684f5ec0&_gl=1*ha5wx3*_ga*MTI2NjE1NzQ1MS4xNjgxMjgzOTc5*_ga_CW55HF8NVT*MTY4NjMzODQzMi4xMi4xLjE2ODYzMzg2OTQuMC4wLjA."
                  controls={false}
                  width={250}
                  height={350}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
