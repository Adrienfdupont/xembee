import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Concept from './pages/Concept';

export default function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-project" element={<Project/>} />
        <Route path="/the-concept" element={<Concept/>} />
      </Routes>
    </div>
  );
}
