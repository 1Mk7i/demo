import { 
  HeroSection, 
  Section, 
  ServicesGrid, 
  WorkProcess, 
  AnimationStyles 
} from '@/components/ui';

export default function Services() {
  const services = [
    {
      title: "Веб-розробка",
      description: "Створення сучасних веб-додатків з використанням React та Next.js",
      icon: "🌐",
      features: ["Responsive дизайн", "SEO оптимізація", "Швидкість завантаження", "Кросбраузерність"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Мобільні додатки",
      description: "Розробка кросплатформних мобільних додатків",
      icon: "📱",
      features: ["iOS та Android", "React Native", "Нативна продуктивність", "Offline підтримка"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "UI/UX дизайн",
      description: "Створення інтуїтивного та привабливого дизайну",
      icon: "🎨",
      features: ["Користувацькі дослідження", "Прототипування", "Дизайн-системи", "Usability тестування"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Консультації",
      description: "Технічні консультації та архітектурні рішення",
      icon: "💡",
      features: ["Архітектура додатків", "Code review", "Оптимізація", "Навчання команди"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "E-commerce рішення",
      description: "Розробка онлайн-магазинів та платформ для продажу",
      icon: "🛒",
      features: ["Платіжні системи", "Інвентар управління", "Аналітика продажів", "Мобільна версія"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Технічна підтримка",
      description: "Постійна підтримка та розвиток ваших проєктів",
      icon: "🔧",
      features: ["24/7 моніторинг", "Оновлення безпеки", "Резервне копіювання", "Швидка відповідь"],
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimationStyles />
      
      <HeroSection
        title="Мої послуги"
        subtitle="Повний спектр послуг для розробки та підтримки ваших цифрових продуктів"
      />
      
      <Section>
        <ServicesGrid services={services} />
      </Section>

      <WorkProcess />

    </main>
  );
}
