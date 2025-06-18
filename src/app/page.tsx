import Link from "next/link";
import { 
  HeroSection, 
  Section, 
  NavigationCards,
  ProjectStructure,
  AboutAuthor,
  AnimationStyles,
  Button 
} from '@/components/ui';

export default function Home() {
  const navigationCards = [
    { 
      href: "/about", 
      title: "Про мене", 
      description: "Дізнайтеся більше про  мою історію та навички",
      icon: "👥",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      href: "/services", 
      title: "Послуги", 
      description: "Перегляньте мої професійні послуги та рішення",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      href: "/blog", 
      title: "Блог", 
      description: "Читайте мої статті, поради та найновіші новини",
      icon: "📝",
      gradient: "from-green-500 to-blue-600"
    },
    { 
      href: "/contact", 
      title: "Контакти", 
      description: "Зв'яжіться зі мною для співпраці та консультацій",
      icon: "📞",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimationStyles />
      
      <HeroSection
        title="Ласкаво просимо!"
        subtitle="Це демонстраційний сайт, створений з Next.js. Досліджуйте різні сторінки та побачте силу сучасної веб-розробки."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <Button size="lg" className="animate-fade-in-delay">
              Дізнатися більше
            </Button>
          </Link>
        </div>
      </HeroSection>

      <Section>
        <NavigationCards cards={navigationCards} />
      </Section>

      <AboutAuthor
        title="Про автора проєкту"
        subtitle="Познайомтеся з розробником цього демонстраційного сайту"
        authorName="Ігор Євлахович"
        authorRole="NextJS Developer"
        description="Вітаю! Я створив цей демонстраційний сайт, щоб показати можливості сучасних веб-технологій. Тут ви можете побачити, як поєднуються дизайн і код для створення красивих та функціональних інтерфейсів."
        skills={["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX"]}
        experience="Веб розробка"
      />

      <ProjectStructure />
    </main>
  );
}
