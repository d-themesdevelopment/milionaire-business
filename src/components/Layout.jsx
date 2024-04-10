
import Footer from "./common/Footer";
import Header from "./common/header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
