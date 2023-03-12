import React from 'react'
import { Navigate } from 'react-router-dom'
import pb from '../lib/pocketbase'

function PrivateRoute({ children }) {
	const isLoggedIn = pb.authStore.isValid
	return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute
