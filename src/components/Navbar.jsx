import { Menu, Phone, MapPin } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,146,60,0.35)]">
            <MapPin className="w-5 h-5 text-black" />
          </div>
          <div>
            <p className="text-white font-semibold leading-none tracking-tight">BH Real Estate</p>
            <p className="text-xs text-white/60 leading-none">Премиальная недвижимость</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#listings" className="text-white/70 hover:text-white transition">Объекты</a>
          <a href="#features" className="text-white/70 hover:text-white transition">Преимущества</a>
          <a href="#contact" className="text-white/70 hover:text-white transition">Контакты</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 bg-gradient-to-b from-orange-500 to-amber-600 text-black font-medium shadow-[0_10px_40px_-10px_rgba(251,146,60,0.6)] hover:shadow-[0_10px_50px_-8px_rgba(251,146,60,0.8)] transition">
            <Phone className="w-4 h-4" />
            Связаться
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/5 text-white hover:bg-white/10">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
