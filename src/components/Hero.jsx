import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[84vh] w-full bg-black text-white overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-b from-orange-400 to-amber-500" />
          Ваш гид по элитной недвижимости
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl"
        >
          Черно-оранжевая эстетика для ярких объектов
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-white/80 text-lg max-w-2xl"
        >
          Премиальный минимализм, акцентные градиенты и неоновое свечение создают ощущение статуса и доверия.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#listings" className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-gradient-to-b from-orange-500 to-amber-600 text-black font-medium shadow-[0_10px_40px_-10px_rgba(251,146,60,0.6)] hover:shadow-[0_10px_50px_-8px_rgba(251,146,60,0.9)] transition">
            Смотреть объекты
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 text-white/90">
            Оставить заявку
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
