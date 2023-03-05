import React from 'react'
import { useLocation } from 'react-router-dom'
import { posts } from '../data'
import { problemsData } from '../problemsData'
import Examples from '../component/Examples'
function ProblemStatement() {
	const location = useLocation()
	const path = location.pathname.split('/')[2]
	const data = problemsData.find((p) => p.id.toString() === path)

	return (
		<div className="container mx-auto max-w-7xl my-20">
			<div className="mx-auto text-center mb-10 font-medium text-lg">
				<h1 className="font-semibold text-xl">{data.name}</h1>
				<p>time limit per test: {data.problem.timeLimit}</p>
				<p>memory limit per test: {data.problem.memoryLimit}</p>
				<p>input: {data.problem.input}</p>
				<p>output: {data.problem.output}</p>
			</div>

			<div className="font-semibold">
				<p className="mb-4">
					{data.problem.statement} Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi sequi dolor, mollitia provident sed, repellat dolorum ut in laudantium inventore consequatur
					nobis doloribus. Aperiam inventore alias ratione, mollitia sapiente sint laborum ipsam non numquam, nostrum, porro magni praesentium sequi.
				</p>
				<h1 className="font-bold text-xl mb-4">input</h1>
				<p className="mb-4">{data.problem.inputStatement}</p>
				<h1 className="font-bold text-xl mb-4">output</h1>
				<p className="mb-4">{data.problem.outputStatement}</p>
			</div>
			<div>
				<h1 className="font-bold text-xl mb-4">Examples</h1>
				<div className="mb-4">
					<Examples />
				</div>
				<div className="mb-4">
					<Examples />
				</div>
			</div>
		</div>
	)
}

export default ProblemStatement
