import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
     <Projects />
     <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

