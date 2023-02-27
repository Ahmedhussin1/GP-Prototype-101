import Navbar from '../component/navbar';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <div>
    <Navbar/>
     <main><Outlet/></main>
    </div>
  );
}

export default RootLayout