import React from "react";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

export default function page() {
  return (
    <div className=" px-40 py-14 bg-transparent">
      <div className=" flex  bg-black w-full h-[600px]">
        <div className=" w-1/2 h-full">
          <img
            className=" w-full h-full object-cover"
            src="https://wallpapercave.com/wp/wp7029244.jpg"
          />
        </div>
        <div className="w-1/2 h-full space-y-5 ">
          <div className=" border-b pb-2 px-2  border-b-gray-400 flex">
            <input
              type="text"
              placeholder="Add a comment"
              className=" outline-none bg-transparent  w-full text-gray-500 px-5 py-2"
            />
            <button className=" text-gray-400">post</button>
          </div>
          <div className=" space-y-5 px-5 h-[450px] overflow-y-scroll scrollbar-hide">
            <div className="flex space-x-5 ">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div className=" space-y-4">
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">
                  An incredible tournament! Congratulations to Chennai. Tough to
                  see my @gujarat_titans teammates get so close, but the beauty
                  of sport prevails and these are all great opportunities to
                  continue to grow. The performance and spirit of this side
                  during the season is something to be proud of ❤️ #ipl
                </p>
              </div>
            </div>

            <div className="flex space-x-5 items-center  ">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center  ">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center  ">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center  ">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
            <div className="flex space-x-5 items-center">
              <img
                src="https://th.bing.com/th/id/OIP.tuZI9kOeq_ydF-G4pFRM8gHaLH?pid=ImgDet&rs=1"
                className=" w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className=" text-sm">Sudhanshu vats</p>
                <p className=" text-sm">comment</p>
              </div>
            </div>
          </div>
          <div className=" flex px-5 w-full h-20 border-t border-t-gray-400   justify-between items-center">
            <div className=" flex space-x-5">
              <AiOutlineHeart size={22} />
              <AiOutlineMessage size={22} />
            </div>
            <BsBookmark size={22} />
          </div>
        </div>
      </div>
      <RxCross1 size={28} className=" fixed top-10 right-10" />
    </div>
  );
}
