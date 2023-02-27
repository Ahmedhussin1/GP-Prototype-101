import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  );
}

export default RootLayout