import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {posts} from '../data'
import { problemsData } from '../problemsData'
function Problems() {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const post = posts.find(p=>p.id.toString() === path)
  return (
    <div className="">
      <h1 className="justify-center flex font-bold text-xl">{post.title}</h1>
      <div className="grid grid-cols-4 font-bold w-1/2  place-items-center">
        <h1>Problem</h1>
        <h1></h1>
        <h1>Solved</h1>
        <h1>Difficulty</h1>
      </div>
      {problemsData.map((data) => (
        <Link key={data.id}  to={`/statement/${data.id}`}>
          <div className="bg-slate-300 mb-10 grid grid-cols-4 h-20 rounded-md place-items-center w-fit">
            <div className="flex">
              <p>{data.id}</p>
              <h2>{data.name}</h2>
            </div>
            <p>{data.tags}</p>
            <p>{data.solved}</p>
            <p>{data.diff}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Problems