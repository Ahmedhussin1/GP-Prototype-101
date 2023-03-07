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
    // <div className="">
    // 	<table className="w-full">
    // 		<tbody>
    // 			<tr className="bg-white">
    // 				<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
    // 					<Link key={post.id} to={`/problems/${post.id}`}>
    // 						{post.id}
    // 					</Link>
    // 				</td>
    // 				<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
    // 					<Link key={post.id} to={`/problems/${post.id}`}>
    // 						<div className="flex flex-col md:flex-row justify-between">
    // 							<div>{post.title}</div>
    // 						</div>
    // 					</Link>
    // 				</td>
    // 				<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
    // 					<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{post.diff}</span>
    // 				</td>
    // 				<td className="p-3 text-sm text-gray-700 whitespace-nowrap">{post.length}</td>
    // 			</tr>
    // 			<Link key={post.id} to={`/problems/${post.id}`}></Link>
    // 		</tbody>
    // 	</table>
    // </div>
  );
}

export default Cards;
