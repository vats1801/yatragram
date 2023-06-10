"use client";
import Sidebar from "@/components/Sidebar";
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineClose,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { useRouter } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

import Carousel from "@/components/Carousel";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: "269e8c7ee21cae0077b9cf3440f535832e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          alert("going back");
        }
        if (commandData.command === "openCreate") {
          router.push("/create");
        }
        if (commandData.command === "openProfile") {
          router.push("/profile");
        }
        if (commandData.command === "openPostId") {
          router.push("/post/1");
        }
      },
    });
  }, []);

  let posts = [
    {
      id: 1,
      author: {
        uid: 1,
        isPremium: false,
        name: "sudhanshu vats",
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
      },
      image: "https://wallpapercave.com/wp/wp7029244.jpg",
      caption: "hi everyone",
      likes: 20,
      comments: 20,
    },
    {
      id: 1,

      author: {
        uid: 1,
        isPremium: true,
        name: "sudhanshu vats",
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
      },
      image: "https://wallpapercave.com/wp/wp7029244.jpg",
      caption: "hi everyone",
      likes: 20,
      comments: 20,
    },
  ];

  let stories = [
    {
      id: 1,
      image: " https://i.ibb.co/ncrXc2V/1.png",
      user: {
        name: "vats",
        image: " https://i.ibb.co/ncrXc2V/1.png",
      },
    },
    {
      id: 1,
      image: " https://i.ibb.co/ncrXc2V/1.png",
      user: {
        name: "vats",
        image: " https://i.ibb.co/ncrXc2V/1.png",
      },
    },
    {
      id: 1,
      image: " https://i.ibb.co/ncrXc2V/1.png",
      user: {
        name: "vats",
        image: " https://i.ibb.co/ncrXc2V/1.png",
      },
    },
    {
      id: 1,
      image: " https://i.ibb.co/ncrXc2V/1.png",
      user: {
        name: "vats",
        image: " https://i.ibb.co/ncrXc2V/1.png",
      },
    },
    {
      id: 1,
      image: "https://i.ibb.co/B3s7v4h/2.png",
      user: {
        name: "vats",
        image: "https://i.ibb.co/B3s7v4h/2.png",
      },
    },
    {
      id: 1,

      image: "https://i.ibb.co/XXR8kzF/3.png",
      user: {
        name: "vats",
        image: "https://i.ibb.co/XXR8kzF/3.png",
      },
    },
    {
      id: 1,
      image: "https://i.ibb.co/yg7BSdM/4.png",
      user: {
        name: "vats",
        image: "https://i.ibb.co/yg7BSdM/4.png",
      },
    },
  ];

  const [data, setData] = useState({ img: "", i: 0 });
  const [prevData, setPrevData] = useState({ img: "", i: 0 });
  const [nextData, setNextData] = useState({ img: "", i: 0 });
  const viewImage = (img, i) => {
    setData({ img, i });
    setPrevData({ img: stories[i - 1].image, i: i - 1 });
    setNextData({ img: stories[i + 1].image, i: i + 1 });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img" && i < stories.length - 1) {
      setData({ img: stories[i + 1].image, i: i + 1 });
      setPrevData({ img: stories[i].image, i: i });
      setNextData({ img: stories[i + 2].image, i: i + 2 });
    }
    if (action === "prev-img" && i > 0) {
      setData({ img: stories[i - 1].image, i: i - 1 });
      setPrevData({ img: stories[i - 2].image, i: i - 2 });
      setNextData({ img: stories[i].image, i: i });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  const handleClick = (id) => {
    router.push(`/post/${id}`);
  };
  return (
    <div>
      {data.img ? (
        <div className=" flex space-x-5 w-full">
          <div
            style={{
              width: "15%",

              padding: "10x",
              alignItems: "center",

              backgroundColor: "black",
            }}
            className=" h-[600px] overflow-y-scroll scrollbar-hide space-y-5 px-20 mt-20"
          >
            {stories.map((s, i) => (
              <div
                onClick={() => viewImage(s.image, i)}
                className=" cursor-pointer text-center space-y-2 text-white "
              >
                <div className=" rounded-full flex  w-16 h-16 border-2 border-pink-400 ">
                  <img
                    src={s.user.image}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-sm">{s.user.name}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "85%",
              height: "calc(100vh - 64px)",
              position: "relative",

              display: "flex",

              justifyContent: "center",
              alignItems: "center",

              backgroundColor: "black",
            }}
            className=" space-x-5"
          >
            <AiOutlineClose
              size={32}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                color: "white",
              }}
              onClick={() => imgAction(false)}
            />
            <AiFillCaretLeft
              size={40}
              onClick={() => imgAction("prev-img")}
              style={{ position: "absolute", left: "100px", color: "white" }}
            />
            <img
              alt=""
              src={prevData.img}
              style={{
                width: "auto",
                maxWidth: "50%",
                maxHeight: "50%",
              }}
              onClick={() => viewImage(prevData.img, prevData.i)}
            />

            <img
              alt=""
              src={data.img}
              style={{
                width: "auto",
                maxWidth: "70%",
                maxHeight: "70%",
              }}
            />

            <img
              alt=""
              src={nextData.img}
              style={{
                width: "auto",
                maxWidth: "50%",
                maxHeight: "50%",
              }}
              onClick={() => viewImage(nextData.img, nextData.i)}
            />
            <AiFillCaretRight
              style={{ position: "absolute", right: "100px", color: "white" }}
              size={40}
              onClick={() => imgAction("next-img")}
            />
          </div>
        </div>
      ) : (
        <div className=" flex ">
          <Sidebar />

          <>
            <div className=" flex-1 py-10  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
              {stories.length > 0 && posts.length > 0 && (
                <div className=" flex space-x-4 mx-20  items-center mb-5">
                  {stories.map((s, i) => (
                    <div
                      onClick={() => viewImage(s.image, i)}
                      className=" cursor-pointer text-center space-y-2 text-white "
                    >
                      <div className=" rounded-full w-16 h-16 border-2 border-pink-400 ">
                        <img
                          src={s.user.image}
                          className=" w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <p className="text-sm">{s.user.name}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className=" px-40 space-y-10">
                {posts.map((p, i) => (
                  <div
                    onClick={() => handleClick(p.id)}
                    className="text-sm w-[500px] space-y-3 border-b border-b-gray-600 py-5 "
                  >
                    <div>
                      <div className="flex space-x-5 items-center">
                        <img
                          src={p.author.image}
                          className=" w-8 h-8 rounded-full object-cover"
                        />
                        <p className=" text-sm">{p.author.name}</p>
                        {p.author.isPremium && (
                          <img
                            src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png"
                            className=" w-[20px] h-[20px] "
                          />
                        )}
                        <p>Ladakh</p>
                      </div>
                    </div>
                    <div>
                      <img
                        className=" w-full max-h-[350px] object-cover rounded-md"
                        src={p.image}
                      />
                    </div>
                    <div className=" flex justify-between items-center">
                      <div className=" flex space-x-5">
                        <AiOutlineHeart size={22} />
                        <AiOutlineMessage size={22} />
                      </div>
                      <BsBookmark size={22} />
                    </div>
                    <div className=" space-y-2">
                      <p>{p.likes}</p>
                      <p>{p.caption}</p>
                      <p>View all {p.comments} comments</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-[400px] px-10 py-5 space-y-5">
              <h1 className=" font-bold text-2xl">Trending</h1>
              <p>Travallers</p>
              <div className="space-y-5">
                <div className="flex space-x-5 items-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p className=" text-sm">Sudhanshu vats</p>
                  {/* {p.author.isPremium && ( */}
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png"
                    className=" w-[20px] h-[20px] "
                  />
                  {/* )} */}
                  <button className=" px-5 py-1 text-sm bg-blue-700 text-white rounded-lg">
                    Follow
                  </button>
                </div>
                <div className="flex space-x-5 items-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p className=" text-sm">Sudhanshu vats</p>
                  {/* {p.author.isPremium && ( */}
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/essentials-volume-i/128/verified-gold-512.png"
                    className=" w-[20px] h-[20px] "
                  />
                  {/* )} */}
                  <button className=" px-5 py-1 text-sm bg-blue-700 text-white rounded-lg">
                    Follow
                  </button>
                </div>
              </div>
              <p>Locations</p>
              <div className=" flex flex-wrap gap-5">
                <div className=" relative  hover:border-2 hover:border-blue-700 rounded-md">
                  <img
                    src="https://wallpapercave.com/wp/wp7029244.jpg"
                    className=" w-[120px] h-[80px] object-cover rounded-md opacity-50"
                  />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full  flex justify-center items-center">
                    <p className=" ">Ladakh</p>
                  </div>
                </div>
                <div className=" relative  hover:border-2 hover:border-blue-700 rounded-md">
                  <img
                    src="https://wallpapercave.com/wp/wp7029244.jpg"
                    className=" w-[120px] h-[80px] object-cover rounded-md opacity-50"
                  />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full  flex justify-center items-center">
                    <p className=" ">Ooty</p>
                  </div>
                </div>
                <div className=" relative  hover:border-2 hover:border-blue-700 rounded-md">
                  <img
                    src="https://wallpapercave.com/wp/wp7029244.jpg"
                    className=" w-[120px] h-[80px] object-cover rounded-md opacity-50"
                  />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full  flex justify-center items-center">
                    <p className=" ">Ladakh</p>
                  </div>
                </div>
                <div className=" relative  hover:border-2 hover:border-blue-700 rounded-md">
                  <img
                    src="https://wallpapercave.com/wp/wp7029244.jpg"
                    className=" w-[120px] h-[80px] object-cover rounded-md opacity-50"
                  />
                  <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full  flex justify-center items-center">
                    <p className=" ">Ooty</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
}
