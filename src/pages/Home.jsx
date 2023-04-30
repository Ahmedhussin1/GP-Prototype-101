import React, {useState} from "react";
import Cards from "../component/Cards";
import Examples from "../component/Examples";
import { upComing } from "../upComing";
import { posts } from "../data";
import { Link } from "react-router-dom";
import ContestTable from "../component/ContestTable";

function Home () {
    const [ contestName, setContestName ] = useState( '' )
    const Images = [
        {
            id: 1,
            src: "../../public/images/mid1.png",
        },

        {
            id: 2,
            src: "../../public/images/mid2.png",
        },
        {
            id: 3,
            src: "../../public/images/tech1.png",
        },
        {
            id: 4,
            src: "../../public/images/tech2.png",
        },
        {
            id: 5,
            src: "../../public/images/tech3.png",
        },
        {
            id: 6,
            src: "../../public/images/tech4.png",
        },
        {
            id: 7,
            src: "../../public/images/tech5.png",
        },
        {
            id: 8,
            src: "../../public/images/tech5.png",
        },
        {
            id: 9,
            src: "../../public/images/tech5.png",
        },
        {
            id: 10,
            src: "../../public/images/tech5.png",
        },
        {
            id: 11,
            src: "../../public/images/tech5.png",
        },
    ]
  return (
    <div className="container mx-auto max-w-7xl grid grid-rows-1 grid-cols-4 gap-x-6 my-6">
      {/* top */}
      <div className="flex flex-col col-span-3 space-y-6">
        {/* left side panel */}
        <div className=" space-y-6">
          {/* Announcement */}
          <div className=" border-slate-100 rounded-lg p-4 border-2 shadow-sm">
            <p className="font-normal text-3xl mb-5 text-red-500">
              ANNOUNCEMENT 📢
            </p>
            <div className="">
              <p className="text-2xl">
                The Launch Of The Website Will be Next August  🎉
              </p>
              <p>
                A based judge to escape the MATRIX
              </p>
            </div>
          </div>
          {/* left side panel */}
          <div className=" border-slate-100 rounded-lg p-4 border-2 shadow-sm">
            <p className="font-normal text-3xl mb-5">
              Up Coming Contests 🤩{" "}
            </p>
            <div className="">
              <Cards upComing={upComing} text="what is the wrong" />
            </div>
          </div>
        </div>
        {/* right side panel */}
        <div className=" border-slate-100 rounded-lg p-4 border-2 shadow-sm">
          <div className="">
            <Cards upComing={posts} text="what is the wrong" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col col-span-1 space-y-6">
        {/* right first */}
        <div className=" flex justify-center border-slate-100 rounded-lg p-4 border-2 shadow-sm">
        <div className="pt-4 flex flex-col items-center ">
            <p>Profile</p>
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
        {/* right second */ }
        <div className="border-slate-100 rounded-lg px-2 py-2 border-2 shadow-sm flex flex-col justify-center">
            <div className="flex pt-4 px-1">
            <p className="font-normal mr-2 text-3xl mb-5">Live Contests</p>{" "}
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
        <table className="w-full ">
            <thead className="bg-gray-50">
                {/* <tr>
                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left"></th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                </tr> */}
            </thead>
            {posts
                .filter((contest) => contest.title.toLowerCase().includes(contestName))
                .map((post) => (
                    <tbody className="">
                        <tr className="bg-white">
                            <td className="py-2 text-sm text-gray-700 whitespace-nowrap w-14">
                                <Link key={post.id} to={`/problems/${post.id}`}>
                                    { posts.length === 0 ? <img src={Images[post.id].src} alt="test" className=" h-14 w-24 object-cover rounded-md "/> : <img src={Images[post.id - 1].src} alt="test" className=" h-14 w-24 object-cover rounded-md"/> }
                                </Link>

                            <p className="absolute text-white text-xl bottom-4 left-4">Length: { post.length }</p>
                            </td>
                            <td className="py-2 px-2 text-sm text-gray-700 whitespace-nowrap w-4">
                                <Link key={post.id} to={`/problems/${post.id}`}>
                                    <div className="flex flex-col justify-between space-y-2 w-20">
                                        <div className='text-sm font-semibold'>{ post.title }</div>
                                        <div className='text-[10px] font-light'>{ post.date }</div>
                                    </div>
                                </Link>
                            </td>
                        </tr>
                        <Link key={post.id} to={`/problems/${post.id}`}></Link>
                    </tbody>
                ) ) }
        </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
