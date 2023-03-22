import { Route, Routes } from "react-router-dom";
import Beranda from "./beranda/Beranda";
import Footer from "./footer/Footer";
import Navbar from "./navigation/Navbar";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
