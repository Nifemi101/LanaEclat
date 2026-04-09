import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import FooterSec from "../Components/FooterSec";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSec />
    </>
  );
};

export default MainLayout;
