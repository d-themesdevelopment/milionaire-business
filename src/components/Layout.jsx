
import Footer from "./common/Footer";
import Header from "./common/Header";
import MobileMenu from "./common/partials/mobile-menu";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>

      <MobileMenu />
    </>
  );
};

export default Layout;
