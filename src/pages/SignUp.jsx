import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signup } from '../hooks/useSignup'

function SignUp() {
	const { reset } = useForm()
	const navigate = useNavigate()
	const [first_name, setFirstName] = useState(null)
	const [last_name, setLastName] = useState(null)
	const [username, setUsername] = useState(null)
	const [birth_day, setBirthDay] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [passwordConfirm, setPasswordConfirm] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		signup(first_name, last_name, username, birth_day, email, password, passwordConfirm)
		navigate('/login')
		reset()
	}

	return (
		<div className="container mx-auto max-w-6xl my-20">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
				<a href="#" className="flex items-center mb-6 text-3xl font-bold text-black">
					sign up
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									First Name
								</label>
								<input
									type="text"
									name="first_name"
									onChange={(e) => setFirstName(e.target.value)}
									id="first_name"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Elon"
									required=""
								/>
							</div>
							<div>
								<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									username
								</label>
								<input
									type="text"
									name="username"
									onChange={(e) => setUsername(e.target.value)}
									id="username"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Elon"
									required=""
								/>
							</div>

							<div>
								<label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Last Name
								</label>
								<input
									type="text"
									name="last_name"
									onChange={(e) => setLastName(e.target.value)}
									id="last_name"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Mask"
									required=""
								/>
							</div>

							<div>
								<label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									birthday
								</label>
								<input
									type="date"
									name="birth_day"
									onChange={(e) => setBirthDay(e.target.value)}
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>

							{/* <div>
								<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Level</label>
								<select
									name="level"
									onChange={(e) => setLevel(e.target.value)}
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option  >Level 1</option>
									<option  >Level 2</option>
									<option  >Level 3</option>
									<option  >Level 4</option>
									<option  >Level 5</option>
									<option >Graduate</option>
								</select>
							</div> */}

							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Email
								</label>
								<input
									type="email"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
									id="email"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="name@company.com"
									required=""
								/>
							</div>

							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Password
								</label>
								<input
									type="password"
									name="password"
									onChange={(e) => setPassword(e.target.value)}
									id="password"
									placeholder="••••••••"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>

							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Confirm Password
								</label>
								<input
									type="password"
									name="passwordConfirm"
									onChange={(e) => setPasswordConfirm(e.target.value)}
									id="passwordConfirm"
									placeholder="••••••••"
									className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required=""
								/>
							</div>

							<button
								type="submit"
								className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
							>
								Sign Up
								{/* {isLoading ? 'loading' : 'Sign Up'} */}
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								All ready have an account ?{' '}
								<Link to={`/login`}>
									<a href="#" className="font-medium text-sky-600 hover:underline dark:text-sky-500">
										Login here
									</a>
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
