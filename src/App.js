import { Route, Routes } from "react-router-dom";
import Beranda from "./beranda/Beranda";
import Footer from "./footer/Footer";
import Navbar from "./navigation/Navbar";
import Portfolio from "./portfolio/Portfolio";
import Linktree from "./kontak/Linktree";

function App() {
  return (
    <div className="font-montserrat">
      {/* main components that will always be shown whenever user moves bwtween pages */}
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/kontak" element={<Linktree />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
