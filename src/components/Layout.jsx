import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function Layout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
