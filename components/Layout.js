// fonts
import { Open_Sans } from "@next/font/google";

// font settings
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// components import
import Nav from "../components/Nav";
import StartImageLeftTop from "../components/StartImageLeftTop";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${opensans.variable} font-opensans relative`}
    >
      <StartImageLeftTop />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
