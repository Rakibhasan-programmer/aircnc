import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
