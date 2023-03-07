import Navbar from "../component/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
function RootLayout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
