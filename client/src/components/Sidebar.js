"use client";
import React, { useContext, useEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineCreateNewFolder } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Sidebar() {
  const { currentUser } = useContext(AuthContext);
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
    <div className=" w-[250px] p-5 space-y-5 h-screen text-white border-r border-r-gray-600">
      <div className=" px-5 h-[100px]">
        <p>Instagram</p>
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
      <Link
        href="/search"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <AiOutlineSearch size={27} />
          <p>Search</p>
        </div>
      </Link>
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
          <MdOutlineCreateNewFolder size={27} />
          <p>Vlogs</p>
        </div>
      </Link>
      <Link
        href="/premium"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Premium</p>
        </div>
      </Link>
      <Link
        href="/user/1"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className=" space-x-5 flex items-center ">
          <MdOutlineCreateNewFolder size={27} />
          <p>Profile</p>
        </div>
      </Link>
    </div>
  );
}
