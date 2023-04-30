import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../component/Cards'
import { posts } from '../data'
import ContestTable from '../component/ContestTable'
function Contests() {
    const [ contestName, setContestName ] = useState( '' )
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
            <ContestTable />
		</>
	)
}

export default Contests
