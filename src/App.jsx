import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Contact />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} BH Real Estate</p>
          <p className="text-white/40 text-xs">Сделано в чёрно-оранжевой эстетике</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
