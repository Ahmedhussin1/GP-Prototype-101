import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
	return (
		<nav className="container flex items-center justify-between mx-auto max-w-7xl py-4">
			<NavLink to="/" className="flex items-center">
				<span className="text-3xl font-semibold">THE JUDGE</span>
			</NavLink>
			<div className="flex items-center font-semibold text-xl space-x-8" id="navbar-default">
				<NavLink to="/" className="" aria-current="page">
					Home
				</NavLink>
				<NavLink to="/contests" className="">
					Contests
				</NavLink>
				<NavLink to="/about" className=" ">
					About
				</NavLink>
				<NavLink to="/login" className=" ">
					Login
				</NavLink>
				<NavLink to="/sign-up" className=" ">
					Register
				</NavLink>
				<NavLink to="/profile" className=" ">
					Profile
				</NavLink>
			</div>
		</nav>
	)
}

export default Navbar
