import React from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../data'
function Cards({ post }) {
	return (
		// <div>
		// <Link to={`/problems/${post.id}`}>
		// 	<div key={post.id} className=" mb-4">
		// 		<div className="bg-slate-200 rounded-md px-10 py-4">
		// 			<div className="mb-4">
		// 				<h1 className="font-bold text-2xl">{post.title}</h1>
		// 			</div>
		// 			<div className=" flex justify-around text-xl">
		// 				<h1>{post.diff}</h1>
		// 				<h1>Length: {post.length}</h1>
		// 				<h1>{post.desc}</h1>
		// 			</div>
		// 		</div>
		// 	</div>
		// </Link>
		// </div>
		<div className="">
			<table className="w-full">
				<tbody>
					<tr className="bg-white">
						<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
							<Link key={post.id} to={`/problems/${post.id}`}>
								{post.id}
							</Link>
						</td>
						<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
							<Link key={post.id} to={`/problems/${post.id}`}>
								<div className="flex flex-col md:flex-row justify-between">
									<div>{post.title}</div>
								</div>
							</Link>
						</td>
						<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
							<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{post.diff}</span>
						</td>
						<td className="p-3 text-sm text-gray-700 whitespace-nowrap">{post.length}</td>
					</tr>
					<Link key={post.id} to={`/problems/${post.id}`}></Link>
				</tbody>
			</table>
		</div>
	)
}

export default Cards
