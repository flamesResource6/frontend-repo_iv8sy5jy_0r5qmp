import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,146,60,0.15),transparent_45%)]" />
      <div className="relative max-w-3xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight text-center"
        >
          Свяжитесь с нами
        </motion.h2>
        <p className="text-white/70 text-center mt-2">Оставьте контакты и мы подберём лучшие варианты</p>

        <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="col-span-1 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ваше имя" />
          <input className="col-span-1 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Телефон" />
          <input className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" />
          <textarea rows="4" className="sm:col-span-2 rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Комментарий"></textarea>
          <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 bg-gradient-to-b from-orange-500 to-amber-600 text-black font-medium shadow-[0_10px_40px_-10px_rgba(251,146,60,0.6)]">
            <Mail className="w-4 h-4" /> Отправить
          </button>
          <div className="sm:col-span-2 flex items-center justify-center gap-4 text-white/70">
            <Phone className="w-4 h-4" /> +1 (555) 123-4567
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
