import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Concept from './pages/Concept';
import Footer from "./components/Footer";
import LegalNotices from "./pages/LegalNotices";

export default function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/our-project" element={<Project/>} />
          <Route path="/the-concept" element={<Concept/>} />
          <Route path="/legal-notices" element={<LegalNotices/>} />
        </Routes>
      </div>

      <Footer></Footer>
    </>
  );
}
