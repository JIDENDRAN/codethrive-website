import React from 'react'
import { Routes, Route , useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { AnimatePresence } from "framer-motion"
import { SEOWrapper } from './components/SEOWrapper';
import Projects from "./pages/Projects";
import FAQ from './pages/FAQ'

function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        
<SEOWrapper>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
        
</SEOWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default App
