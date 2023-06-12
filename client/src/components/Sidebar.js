"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineCreateNewFolder } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { MdNotificationsNone } from "react-icons/md";

export default function Sidebar() {
  const { currentUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [openNoti, setOpenNoti] = useState(false);
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
          router.push("/user/1");
        }
        if (commandData.command === "openPostId") {
          router.push("/post/1");
        }
        if (commandData.command === "logOut") {
          auth.signOut();
          router.push("/login");
        }
      },
    });
  }, []);

  return (
    <div
      className={` w-[250px]  p-5 z-20 space-y-5 h-screen text-white border-r overflow-y-scroll scrollbar-hide border-r-gray-600`}
    >
      <div className=" px-5 h-[80px]">
        <p>Yatragram</p>
      </div>

      <Link
        href="/"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <AiOutlineHome size={27} />
          <p>Home</p>
        </div>
      </Link>

      <div
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        className="space-x-5 px-3 py-2 flex items-center hover:bg-gray-600  rounded-md"
      >
        <AiOutlineSearch size={27} />
        <p>Search</p>
      </div>

      <Link
        href="/explore"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineExplore size={27} />
          <p>Explore</p>
        </div>
      </Link>
      <Link
        href="/reel"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <AiOutlineVideoCameraAdd size={25} />
          <p>Reels</p>
        </div>
      </Link>

      <div
        onClick={() => (openNoti ? setOpenNoti(false) : setOpenNoti(true))}
        className="space-x-5 px-3  hover:bg-gray-600  rounded-md py-2 flex items-center"
      >
        <MdNotificationsNone size={25} />
        <p>Notifications</p>
      </div>

      <Link
        href="/create"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Create</p>
        </div>
      </Link>
      <Link
        href="/chat"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <BiMessageRounded size={27} />
          <p>Messages</p>
        </div>
      </Link>
      <Link
        href="/live"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Live</p>
        </div>
      </Link>
      <Link
        href="/vlog"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <BsPersonVideo3 size={27} />
          <p>Vlogs</p>
        </div>
      </Link>
      <Link
        href="/premium"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineWorkspacePremium size={27} />
          <p>Premium</p>
        </div>
      </Link>
      <Link
        href="/user/1"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className=" space-x-5 flex items-center ">
          <img
            src={currentUser?.photoURL}
            className=" w-8 h-8 rounded-full object-cover"
          />
          <p>{currentUser?.displayName}</p>
        </div>
      </Link>
      <div
        className={`w-[350px] ${
          open ? "left-[250px]" : "-left-[850px]"
        } fixed top-0 px-4 duration-500 ease-in-out z-1  h-full bg-black `}
      >
        <div className="flex space-x-3">
          <input
            type="search"
            placeholder=" Search People and Places"
            className=" h-[40px] w-[75%] px-3 py-1 bg-gray-600 text-white rounded-xl"
          />

          <button className=" w-[25%] h-[40px] px-3 py-1 bg-blue-700 text-white rounded-lg">
            Search
          </button>
        </div>
        <div className=" mt-10 pl-5 space-y-5">
          <div className="flex space-x-5 items-center">
            <img
              src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
              className=" w-8 h-8 rounded-full object-cover"
            />
            <p className=" text-sm">Sudhanshu vats</p>
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
            <button className=" px-5 py-1 text-sm bg-blue-700 text-white rounded-lg">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-[350px] ${
          openNoti ? "left-[250px]" : "-left-[850px]"
        } fixed top-0 px-4 duration-500 ease-in-out z-1  h-full bg-black `}
      >
        <h1 className=" text-xl font-bold">Notification</h1>
        <div className=" mt-10 pl-5 space-y-5"></div>
      </div>
    </div>
  );
}
