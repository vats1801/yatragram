"use client";
import React, { useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineCreateNewFolder } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import Link from "next/link";
import { SpinnerContext } from "@/context/SpinnerContext";

export default function Sidebar() {
  const { dispatch } = useContext(SpinnerContext);

  const handleSelect = (u) => {
    dispatch({ type: "LOAD" });
  };
  return (
    <div className=" w-[250px] p-5 space-y-5 h-screen text-white border-r border-r-gray-600">
      <div className=" px-5 h-[100px]">
        <p>Instagram</p>
      </div>

      <Link
        onClick={handleSelect}
        href="/"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <AiOutlineHome size={27} />
          <p>Home</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
        href="/search"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <AiOutlineSearch size={27} />
          <p>Search</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
        href="/explore"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineExplore size={27} />
          <p>Explore</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
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
        onClick={handleSelect}
        href="/chat"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <BiMessageRounded size={27} />
          <p>Messages</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
        href="/live"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Live</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
        href="/vlog"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Vlogs</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
        href="/premium"
        className="px-3 py-2 space-x-5 flex items-center hover:bg-gray-600  rounded-md"
      >
        <div className="space-x-5 flex items-center">
          <MdOutlineCreateNewFolder size={27} />
          <p>Premium</p>
        </div>
      </Link>
      <Link
        onClick={handleSelect}
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
