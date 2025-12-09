import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Coverage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
