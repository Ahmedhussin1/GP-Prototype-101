import React from 'react'
import {posts} from '../data'
function Contests() {
  return (
    <div className="">
      {posts.map((post) => (
        <div
          key={post.id}
          className="container flex flex-col flex-wrap mx-auto"
        >
          <div className="bg-slate-200 text-neutral-900 mb-9 w-2/3 h-28 rounded-md">

            <div className="grid grid-cols-4 justify-items-center mt-3">
              <h1 className="font-bold text-2xl ">{post.title}</h1>
            </div>

            <ul className="grid grid-flow-col grid-cols-4 justify-items-center mt-8 text-lg">
              <li>{post.diff}</li>
              <li>Length: {post.length}</li>
              <li>{post.desc}</li>
              <li>{post.tags}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contests