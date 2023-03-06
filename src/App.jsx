import Navbar from './component/navbar'
import Contests from './pages/Contests'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Problems from './pages/Problems'
import ProblemStatement from './pages/problemStatement'
import SignUp from './pages/SignUp'
// import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
// import AuthProvider from './context/AuthContext'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contests" element={<Contests />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/problems/:id" element={<Problems />} />
      <Route path="/statement/:id" element={<ProblemStatement />} />
    </Route>
  )
);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
