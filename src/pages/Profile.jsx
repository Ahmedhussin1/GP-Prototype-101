import React from 'react'
import pb from '../lib/pocketbase'
import useLogout from '../hooks/useLogout'

function Profile() {
	const logout = useLogout()
	return (
		<div className="container mx-auto max-w-6xl flex justify-center items-center my-20">
			<div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
				<div className="flex flex-col items-center py-20">
					<img className="w-32 h-32 mb-3 rounded-full shadow-lg" src="public/images/download.jpg" alt="Bonnie image" />
					<h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{pb.authStore.model.first_name + ' ' + pb.authStore.model.last_name}</h5>
					<span className="text-md text-gray-500 dark:text-gray-400">{`@${pb.authStore.model.username}`}</span>
					<div className="flex mt-4 space-x-3 md:mt-6">
						<a
							href="#"
							className="inline-flex items-center px-4 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Update profile
						</a>
						<a
							href="#"
							onClick={logout}
							className="inline-flex items-center px-4 py-2 text-md font-medium text-center text-red-700 bg-white border border-red-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-red-600 dark:border-red-600 dark:hover:bg-gray-900 dark:hover:border-gray-700 dark:focus:ring-gray-700"
						>
							Log out
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
