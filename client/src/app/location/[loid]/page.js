"use client";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
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
  let vlogs = [
    {
      id: 1,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
    {
      id: 2,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
    {
      id: 3,
      thumbnail: "https://i.ytimg.com/vi/JetvgEtSNMM/maxresdefault.jpg",
      user: {
        image:
          "https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1",
        name: "Sudhanshu vats",
      },
    },
  ];
  const handleClick = (id) => {
    router.push(`/vlog/${id}`);
  };
  return (
    <div className=" flex ">
      <Sidebar />

      <div className=" flex-1 p-2 space-y-10  border-r-2 border-r-gray-600 overflow-y-scroll h-screen scrollbar-hide">
        <div className=" w-full h-[250px] relative">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
            className="w-full h-[250px] object-cover opacity-25"
          />
          <p className=" text-2xl w-[10%] absolute top-[100px] bottom-[100px] left-[45%] right-[45%]">
            <span className=" text-2xl text-red-600 mr-2">Explore</span>Ladakh
          </p>
        </div>
        <div className=" flex space-x-5 px-20 w-full justify-center">
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Travel Advice</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Hotels</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Things to Do</p>
          </div>
          <div className=" w-[150px] py-3 text-center border rounded-md border-white">
            <p>Restaurants</p>
          </div>
        </div>
        {/* <div className="  flex flex-wrap gap-3 px-20 w-full justify-center">
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
          <img
            className="w-[200px] h-[150px] object-cover"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/20/f1/7e/pugga-valley-ladakh.jpg?w=1200&h=1200&s=1"
          />
        </div> */}
        <div className=" px-20 space-y-5">
          <p className="py-3 border-b border-b-white">Vlogs</p>
          <div className=" flex flex-wrap gap-5">
            {vlogs.map((v, i) => (
              <div
                onClick={() => handleClick(v.id)}
                className="  w-[350px] space-y-5 py-5 rounded-lg "
              >
                <img
                  src={v.thumbnail}
                  className=" w-full h-[200px] rounded-lg object-cover hover:border-4 hover:border-blue-800"
                />
                <div className="flex space-x-5 items-center">
                  <img
                    src={v.user.image}
                    className=" w-8 h-8 rounded-full object-cover "
                  />
                  <p className=" text-sm">{v.user.name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className=" py-3 border-b border-b-white">Posts</p>
          <div className="  flex space-x-5">
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
                  </div>
                </div>
                <div>
                  <img
                    className=" w-full max-h-[350px] object-cover rounded-md"
                    src={p.image}
                  />
                </div>
                {/* <div className=" flex justify-between items-center">
                  <div className=" flex space-x-5">
                    <AiOutlineHeart size={22} />
                    <AiOutlineMessage size={22} />
                  </div>
                  <BsBookmark size={22} />
                </div> */}
                {/* <div className=" space-y-2">
                  <p>{p.likes}</p>
                  <p>{p.caption}</p>
                  <p>View all {p.comments} comments</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
