import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';
function RootLayout() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  );
}

export default RootLayout