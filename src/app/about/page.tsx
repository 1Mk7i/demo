import { 
  HeroSection, 
  Section, 
  FeatureGrid, 
  AboutAuthor, 
  TechStack, 
  AnimationStyles 
} from '@/components/ui';

export default function About() {
  const missionFeatures = [
    {
      icon: "🚀",
      title: "Швидкість",
      description: "Оптимізовані рішення для максимальної продуктивності"
    },
    {
      icon: "🎯",
      title: "Якість",
      description: "Високі стандарти коду та увага до деталей"
    },
    {
      icon: "💡",
      title: "Інновації",
      description: "Використання найсучасніших технологій"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimationStyles />
      
      <HeroSection
        title="Про мене"
        subtitle="Я — UI/UX дизайнер і React-розробник, який поєднує в собі дизайн-мислення з глибоким розумінням сучасних вебтехнологій. Маю досвід створення адаптивних, продуктивних та доступних інтерфейсів, починаючи з Figma-прототипів і завершуючи живим кодом на React + Vite + Tailwind CSS. Цей сайт — не просто резюме, а інтерактивна демонстрація моїх навичок: дизайн, логіка, оптимізація, UI/UX-патерни, структурування коду."
      />

      <Section>
        <FeatureGrid
          title="Моя місія"
          subtitle="Я прагну створювати швидкі, надійні та красиві веб-додатки, які допомагають бізнесу досягати своїх цілей у цифровому світі."
          features={missionFeatures}
          columns={3}
        />
      </Section>

      <AboutAuthor
        title="Хто я такий?"
        subtitle="Познайомтеся зі мною ближче - моя історія, навички та підхід до роботи"
        authorName="Ігор Євлахович"
        authorRole="UI/UX Designer & React Developer"
        description="Привіт! Я поєдную в собі дизайн-мислення з глибоким розумінням сучасних веб-технологій. Почав свій шлях як дизайнер, а згодом освоїв програмування, що дозволяє мені створювати не лише красиві, але й функціональні рішення. Моя пристрасть - це перетворення ідей у живі, інтерактивні веб-додатки."
        skills={["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "UI/UX Design", "Vite", "JavaScript"]}
        experience="3+ роки досвіду"
      />

      <TechStack />
    </main>
  );
}
