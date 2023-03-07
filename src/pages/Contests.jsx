import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../component/Cards'
import { posts } from '../data'
function Contests() {
	const [contestName, setContestName] = useState('')

	return (
		<>
			<div className="mb-4 container mx-auto max-w-7xl ">
				<div class="relative w-96">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</div>
					<input
						type="search"
						onChange={(e) => setContestName(e.target.value)}
						class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none "
						placeholder="Search for a contest..."
					/>
				</div>
			</div>
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
					{posts
						.filter((contest) => contest.title.toLowerCase().includes(contestName))
						.map((post) => (
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
		</>
	)
}

export default Contests
