"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function page() {
  const images = [
    "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
    "https://storage.newspark.ca/storage/35042924/2351",
    "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/R.773a219993a9675bd312da1934a1e627?rik=XJIfQGAgU3MOTg&riu=http%3a%2f%2floyolaphoenix.com%2fwp-content%2fuploads%2f2017%2f11%2fc01-DUSK.jpg&ehk=c8BK6ky7q9C6SPkIRpEbv3E8Cmn%2f3L7fjIlQapjP95k%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1",
    "https://wtop.com/wp-content/uploads/2022/12/Film_Review_-_Avatar__The_Way_of_Water_33752-scaled-e1671401944702.jpg",
    "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
    "https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg",
  ];
  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-1 p-2  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
        <div className=" flex space-x-3 ">
          <div className=" hover:border-2 hover:border-blue-800 relative w-[150px] h-[100px] rounded-lg">
            <img
              src="https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg"
              className=" w-full h-full object-cover  rounded-lg  opacity-30 "
            />
            <p className=" absolute top-[40px] bottom-[40px] left-[40px]  ">
              Packages
            </p>
          </div>
          <div className=" hover:border-2 hover:border-blue-800 relative w-[150px] h-[100px] rounded-lg">
            <img
              src="https://th.bing.com/th/id/OIP.sC87oZruk3srbdptjSmlNAHaE9?pid=ImgDet&rs=1"
              className=" w-full h-full object-cover  rounded-lg  opacity-30 "
            />
            <p className=" absolute top-[40px] bottom-[40px] left-[40px]  ">
              Places
            </p>
          </div>
          <div className=" hover:border-2 hover:border-blue-800 relative w-[150px] h-[100px] rounded-lg">
            <img
              src="https://photographylife.com/wp-content/uploads/2017/01/Landscape-photography-example.jpg"
              className=" w-full h-full object-cover  rounded-lg  opacity-30 "
            />
            <p className=" absolute top-[40px] bottom-[40px] left-[40px]  ">
              Planner
            </p>
          </div>
          <div className=" hover:border-2 text-center hover:border-blue-800 relative flex-1  h-[100px] rounded-lg">
            <img
              src="https://www.indianpanorama.in/blog/wp-content/uploads/2019/06/blog-cover1.jpg"
              className=" w-full h-full object-cover  rounded-lg opacity-25 "
            />
            <p className=" absolute top-[40px] bottom-[40px] left-[40%] right-[40%]   ">
              Search location
            </p>
          </div>
          {/* <div className=" flex flex-col  space-y-3  flex-1 pt-2  ">
            <input
              type="search"
              placeholder=" Search Location"
              className="  w-full h-10 px-10 bg-gray-600 text-white rounded-xl"
            />
            <button className=" w-[100px] px-5 py-2 bg-blue-700 text-white rounded-lg">
              Search
            </button>
          </div> */}
        </div>
        <ResponsiveMasonry
          className=" w-px-2 mt-2"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="8px">
            {images.map((image, i) => (
              <img
                className=" hover:w-scale-90 w-ease-in w-duration-500"
                alt=""
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
