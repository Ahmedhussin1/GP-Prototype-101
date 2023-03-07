import React from "react";
import { Link } from "react-router-dom";

function Cards({ upComing }) {
  return (
    <div>
      {upComing.map((data) => (
        <div key={data.id} className="my-4">
          <div className="bg-slate-50 rounded-md px-2 py-5 shadow-md border-slate-100">            
            <div className=" grid grid-flow-col grid-cols-4 gap-3 font-light">
              <div>
              <h1 className="font-base text-2xl">{data.title}</h1>
              </div>

              <h1 className="mx-2">Creator: {data.author}</h1>
              <h1 className="mx-2">Length: {data.length}</h1>
              <h1 className="mx-2">{data.desc}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Cards;
