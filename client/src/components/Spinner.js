import React from "react";

export default function Spinner() {
  return (
    <div>
      <marquee
        scrollamount="100"
        direction="right"
        className=" duration-0 w-full h-[5px] bg-cyan-400"
      >
        <div className=" flex">
          <div className=" bg-yellow-500 h-full w-[400px] ">hi</div>
          <div className=" bg-pink-500 h-full w-[500px] ">hi</div>
          <div className=" bg-green-500 h-full w-[400px]">hi</div>
        </div>
      </marquee>
    </div>
  );
}
