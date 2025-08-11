import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-red-500 to-orange-400">
      <Navbar />
      <main className="pt-16 text-white">
        <Hero />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;