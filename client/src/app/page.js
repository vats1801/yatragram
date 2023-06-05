"use client";
import Sidebar from "@/components/Sidebar";
import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { SpinnerContext } from "@/context/SpinnerContext";

export default function Home() {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const handleSelect = () => {
    dispatch({ type: "LOAD" });
  };
  const { dispatch } = useContext(SpinnerContext);

  let posts = [
    {
      id: 1,
      author: {
        uid: 1,
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
      image: "",
      user: {
        name: "vats",
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
      },
    },
    {
      id: 1,
      image: "",
      user: {
        name: "vats",
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
      },
    },
  ];

  const handleClick = (id) => {
    router.push(`/post/${id}`);
  };
  return (
    <div className=" flex ">
      <Sidebar />
      {stories.length > 0 && posts.length > 0 && handleSelect()}
      <>
        <div className=" flex-1 py-10  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
          <div className=" flex space-x-4 mx-20  items-center mb-5">
            {stories.map((s, i) => (
              <div className=" text-center space-y-2 text-white ">
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
        <div className=" w-[400px] p-10 space-y-5">
          <p>Trending</p>
          <p>Travallers</p>
          <div className="space-y-5">
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
          <p>Locations</p>
          <div className=" flex flex-wrap gap-5">
            <img
              src="https://wallpapercave.com/wp/wp7029244.jpg"
              className=" w-[120px] h-[80px] object-cover rounded-md"
            />
            <img
              src="https://wallpapercave.com/wp/wp7029244.jpg"
              className=" w-[120px] h-[80px] object-cover rounded-md"
            />
          </div>
          <p>Hashtag</p>
          <div className=" space-y-3">
            <p>#jiyokhulke</p>
            <p>#kedarnath</p>
          </div>
        </div>
      </>
    </div>
  );
}
