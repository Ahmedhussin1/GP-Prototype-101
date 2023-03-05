import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { posts } from '../data'
import { problemsData } from '../problemsData'
function Problems() {
	const location = useLocation()
	const path = location.pathname.split('/')[2]
	const post = posts.find((p) => p.id.toString() === path)
	return (
		<div className="overflow-auto rounded-lg shadow container mx-auto max-w-7xl">
			<table className="w-full">
				<thead className="bg-gray-50 border-b-2 border-gray-200">
					<tr>
						<th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
						<th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
						<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Difficulty</th>
						<th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Solved</th>
					</tr>
				</thead>
				{problemsData.map((data) => (
					<tbody>
						<tr className="bg-white">
							<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
								<Link key={data.id} to={`/statement/${data.id}`}>
									{data.id}
								</Link>
							</td>
							<td className="p-3 text-sm text-gray-700 whitespace-nowrap">
								<Link key={data.id} to={`/statement/${data.id}`}>
									<div className="flex flex-col md:flex-row justify-between">
										<div>{data.name}</div>
										<div>{data.tags}</div>
									</div>
								</Link>
							</td>
							<td className="p-3 text-sm text-gray-700  whitespace-nowrap">
								<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{data.diff}</span>
							</td>
							<td className="p-3 text-sm text-gray-700 whitespace-nowrap">{data.solved}</td>
						</tr>
						<Link key={data.id} to={`/statement/${data.id}`}></Link>
					</tbody>
				))}
			</table>
		</div>
	)
}

export default Problems
