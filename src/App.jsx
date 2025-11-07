import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ScrollToTop } from "./component/Scrolltop";
import './index.css';
import Navbar from "./component/header";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Footer from "./component/footer";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;