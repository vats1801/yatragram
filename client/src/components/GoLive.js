"use client";
import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiOutlineCamera } from "react-icons/ai";
import { BsMic } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useSocket } from "@/context/SocketContext";

export default function GoLive() {
  const [stream, setStream] = useState(null);
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const router = useRouter();

  const socket = useSocket();

  const getCamera = () => {};

  const goLive = useCallback(() => {
    socket.emit("room:join", { email, room });
  }, [room, socket]);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      router.push(`/live/room/${room}`);
    },
    [router]
  );
  useEffect(() => {
    socket.on("room:join", handleJoinRoom);

    return () => {
      socket.off("join:room", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);
  return (
    <div className="space-y-10  flex flex-col items-center">
      {/* <div className=" flex space-x-10">
        <button
          onClick={getCamera}
          className=" px-5 py-2 text-white bg-gray-700 rounded-lg"
        >
          Get camera
        </button>
        <button
          onClick={goLive}
          className=" px-5 py-2 text-white bg-gray-700 rounded-lg"
        >
          Go Live
        </button>
      </div> */}

      {/* <div className=" rounded-lg relative">
        <video
          autoPlay
          muted
          className=" rounded-lg w-[400px] h-[300px]  border-2 border-blue-700"
        ></video>
        <div className=" absolute bottom-5 left-40 right-40 w-20 justify-between flex s">
          <AiOutlineCamera
            size={25}
            className=" hover:bg-gray-400 rounded-full hover:text-black w-10 h-10 p-1"
          />
          <BsMic
            size={25}
            className=" hover:bg-gray-400 rounded-full hover:text-black w-10 h-10 p-2"
          />
        </div>
      </div> */}
      {/* <input
        type="text"
        placeholder="Write Description"
        className=" px-5 py-5 bg-gray-600 rounded-lg text-white outline-none w-full "
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className=" flex space-x-10">
        <div className="px-5 py-5 space-x-3 flex items-center">
          <input
            type="checkbox"
            className="w-[30px] h-[30px] p  rounded-lg   "
          />
          <label className=" text-lg">Premium</label>
        </div>
        <div className="px-5 py-5 space-x-3 flex items-center">
          <input
            type="checkbox"
            className="w-[30px] h-[30px] p  rounded-lg   "
          />
          <label className=" text-lg">Regular</label>
        </div>
      </div> */}

      <label>EMail</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Room</label>
      <input type="text" onChange={(e) => setRoom(e.target.value)} />
      <button onClick={goLive}>Go Live</button>
    </div>
  );
}
