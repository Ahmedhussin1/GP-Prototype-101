import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../component/Cards'
import { posts } from '../data'
function Contests() {
	return (
		<div className="overflow-auto rounded-lg shadow container mx-auto max-w-7xl">
			<table className="w-full">
				<thead className="bg-gray-50 border-b-2 border-gray-200">
					<tr>
						<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
						<th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
						<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Difficulty</th>
						<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">length</th>
					</tr>
				</thead>
				{posts.map((post) => (
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
							<td className="p-3 text-sm text-gray-700 whitespace-nowrap ">{post.length}</td>
						</tr>
						<Link key={post.id} to={`/problems/${post.id}`}></Link>
					</tbody>
				))}
			</table>
		</div>
	)
}

export default Contests
