import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
