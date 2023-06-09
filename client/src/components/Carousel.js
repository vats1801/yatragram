"use client";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel(props) {
  const [curr, setCurr] = useState(0);

  let autoSlideInterval = 5000;

  let stories = [
    {
      id: 1,
      image: "https://i.ibb.co/B3s7v4h/2.png",
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
  const [image, setImg] = useState(stories[curr].image);
  const prev = () => {
    const isFirst = curr === 0;
    const newIndex = isFirst ? stories.length - 1 : curr - 1;
    setCurr(newIndex);
  };

  const next = () => {
    const isLast = curr === stories.length - 1;
    const newIndex = isLast ? 0 : curr + 1;
    setCurr(newIndex);
  };

  //   useEffect(() => {
  //     if (false) {
  //       const slideInterval = setInterval(next, autoSlideInterval);

  //       return () => clearInterval(slideInterval);
  //     }
  //   }, []);
  return (
    <div className=" fixed w-[500px] h-[500px] bg-black">
      <div className="z-10 w-full h-full overflow-hidden relative  bg-green-300">
        <div
          className="flex w-full h-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          <img className="w-full h-full" src={stories[2].image} />;
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <AiOutlineLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <AiOutlineRight size={40} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {stories.map((_, i) => (
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
