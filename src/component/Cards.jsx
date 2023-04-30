import React from "react";
import { Link } from "react-router-dom";

function Cards ( { upComing } )
{
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
    <div className="grid grid-rows-1 grid-cols-3 gap-x-4">
      {upComing.map((data) => (
        <div key={data.id} className="my-4">
            <div className="bg-slate-50 rounded-md shadow-md border-slate-100">
                  <div className="relative ">
                      { upComing.length === 0 ? <img src={Images[data.id].src} alt="test" className="w-full h-48 object-cover rounded-t-md "/> : <img src={Images[data.id - 1].src} alt="test" className="w-full h-48 object-cover rounded-t-md"/> }
                      <p className="absolute text-white text-xl bottom-4 left-4">Length: { data.length }</p>
                </div>
                <div className=" px-4 py-2 font-light">
                    <p className="font-semibold text-2xl">{ data.title }</p>
                    <p className="">Creator: {data.author}</p>
                    <p className="">{data.desc}</p>
                </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Cards;
