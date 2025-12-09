import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ScrollToTop } from "./component/scrolltop";
import './index.css';
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import Layout from "./component/layout";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;