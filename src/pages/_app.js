import Layout from "@/components/Layout";

// Import Custom Styles
import "../../public/sass/style.scss";
import "@/styles/globals.scss";

// Import Module Styles
import "swiper/css";
import "swiper/css/autoplay";
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
