import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'boxicons/css/boxicons.min.css';
import Navbar from "./components/Navbar";

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2196F3] mx-auto mb-4"></div>
      <p className="text-[#64748B] font-medium">Memuat halaman...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#E3F2FD] via-white to-[#A7F3D0]">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
