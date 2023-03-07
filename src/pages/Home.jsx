import React from "react";
import Cards from "../component/Cards";
import Examples from "../component/Examples";
import { upComing } from "../upComing";
import { posts } from "../data";

function Home() {
  return (
    <div className="container mx-auto max-w-7xl space-y-4">
      {/* top */}
      <div className="grid grid-row-1 grid-cols-4 gap-x-4">
        {/* left side panel */}
        <div className="col-span-3 space-y-4">
          {/* Announcement */}
          <div className=" border-slate-100 rounded-lg p-4 border-2 shadow-sm">
            <h1 className="font-normal text-3xl mb-5 text-red-500">
              ANNOUNCEMENT 📢
            </h1>
            <div className="">
              <h1 className="text-2xl">
                The Launch Of The Website Will be Next August 🎉
              </h1>
              <h2>
                This Is A Project Done By The Students Of 6-October's Computer
                Science Major As A Graduation Project
              </h2>
            </div>
          </div>
          {/* left side panel */}
          <div className=" border-slate-100 rounded-lg p-4 border-2 shadow-sm">
            <h1 className="font-normal text-3xl mb-5">
              Up Coming Contests 🤩{" "}
            </h1>
            <div className="">
              <Cards upComing={upComing} text="what is the wrong" />
            </div>
          </div>
        </div>
        {/* right side panel */}
        <div className="border-slate-100 rounded-lg p-4 border-2 shadow-sm col-span-1 flex justify-center ">
          {/* first block in side panel */}
          <div className="pt-4 flex flex-col items-center ">
            <h3>Profile</h3>
            <div className="flex flex-col items-center mt-4">
              <img
                src="/public/images/download.jpg"
                alt=""
                className="w-32 h-32  rounded-full shadow-lg"
              />
              <p className="mt-2">Nagi</p>
              <p>the Goat</p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="grid grid-row-1 grid-cols-4 gap-x-4">
        {/* left side panel */}
        <div className="col-span-3 border-slate-100 rounded-lg p-4 border-2 shadow-sm">
          <h1 className="font-normal text-3xl mb-5">On Going Contests</h1>
          <div className="">
            <Cards upComing={posts} text="what is the wrong" />
          </div>
        </div>
        {/* right side panel */}
        <div className="col-span-1 flex justify-center border-slate-100 rounded-lg p-4 border-2 shadow-sm">
          {/* first block in side panel */}
          <div className="pt-4 flex flex-col items-center ">
            <h3>Profile</h3>
            <div className="flex flex-col items-center mt-4">
              <img
                src="/public/images/download.jpg"
                alt=""
                className="w-32 h-32 mb-3 rounded-full shadow-lg"
              />
              <p>Nagi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
