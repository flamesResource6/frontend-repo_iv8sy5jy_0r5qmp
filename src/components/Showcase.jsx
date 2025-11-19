import { motion } from 'framer-motion';

const items = [
  {
    title: 'Панорамные апартаменты, City View',
    tag: 'Новостройка',
    price: 'от $480,000',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Лофт в историческом центре',
    tag: 'Вторичка',
    price: 'от $320,000',
    img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Вилла у побережья',
    tag: 'Премиум',
    price: 'от $1,250,000',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop',
  },
];

function Card({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
          <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-b from-orange-400 to-amber-500" />
          {item.tag}
        </div>
        <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
        <p className="text-white/70 text-sm">{item.price}</p>
      </div>
    </motion.div>
  );
}

function Showcase() {
  return (
    <section id="listings" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Подборка объектов</h2>
            <p className="text-white/70 mt-1">Лучшие варианты с мгновенным доступом к просмотрам</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 bg-gradient-to-b from-orange-500 to-amber-600 text-black font-medium">
            Получить консультацию
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={i} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
