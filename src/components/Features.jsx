import { Shield, BadgeCheck, Building2, Sparkles } from "lucide-react";

function Features() {
  const items = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Юридическая чистота",
      text: "Полная проверка документов и безопасные сделки",
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      title: "Эксклюзивные объекты",
      text: "Доступ к закрытым предложениям премиум-класса",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Городская экспертиза",
      text: "Глубокое знание районов и инфраструктуры",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Дизайн-подача",
      text: "Профессиональные визуализации и 3D-туры",
    },
  ];

  return (
    <section id="features" className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.15),transparent_45%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Почему мы</h2>
        <p className="text-white/70 mt-2 max-w-2xl">
          Мы строим доверие через прозрачность, точность и превосходный сервис.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-orange-500 to-amber-600 text-black flex items-center justify-center">
                {it.icon}
              </div>
              <h3 className="mt-4 font-medium">{it.title}</h3>
              <p className="text-sm text-white/70 mt-1">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
