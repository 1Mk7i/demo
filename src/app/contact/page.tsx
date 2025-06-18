'use client';

import { 
  HeroSection, 
  ContactInfo, 
  SocialIcons, 
  FAQ, 
  Button, 
  Section,
  AnimationStyles 
} from '@/components/ui';

export default function Contact() {
  const faqItems = [
    {
      question: "Скільки часу займає розробка проєкту?",
      answer: "Терміни залежать від складності проєкту. Простий сайт - 2-4 тижні, складний додаток - 2-6 місяців.",
      icon: "⏱️"
    },
    {
      question: "Чи надаєте ви технічну підтримку?",
      answer: "Так, ми надаємо повну технічну підтримку та супровід після запуску проєкту.",
      icon: "🛠️"
    },
    {
      question: "Які технології ви використовуєте?",
      answer: "Ми працюємо з найсучаснішими технологіями: Next.js, React, TypeScript, Node.js та іншими.",
      icon: "💻"
    },
    {
      question: "Чи можна внести зміни в процесі розробки?",
      answer: "Звичайно! Ми використовуємо гнучку методологію розробки, що дозволяє вносити корективи.",
      icon: "🔄"
    },
    {
      question: "Як відбувається оплата?",
      answer: "Зазвичай оплата розділяється на етапи: 50% на початку, 50% після завершення проєкту.",
      icon: "💳"
    },
    {
      question: "Чи працюєте ви з міжнародними клієнтами?",
      answer: "Так, ми маємо досвід роботи з клієнтами з різних країн і часових поясів.",
      icon: "🌍"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimationStyles />
      
      <HeroSection
        title="Контакти"
        subtitle="Готові обговорити ваш проєкт? Зв'яжіться з нами зручним способом"
      >
        <div className="animate-bounce">
          <div className="inline-block text-4xl">👇</div>
        </div>
      </HeroSection>

      <Section>
        <div className="max-w-4xl mx-auto">
          <ContactInfo />
          
          {/* Map Placeholder */}
          <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 font-medium">Інтерактивна карта</p>
                  <p className="text-sm text-gray-500">вул. Інноваційна, 123, Київ</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow-md">
                <span className="text-sm text-gray-600">📍 Офіс</span>
              </div>
            </div>
          </div>

          <SocialIcons className="mt-12" />
        </div>
      </Section>
        
      <Section background="gray">
        <FAQ items={faqItems} />
      </Section>
      
      <Section>
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Готові почати проєкт?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Зв&apos;яжіться зі мною сьогодні і отримайте безкоштовну консультацію
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Безкоштовна консультація
              </Button>
              <Button variant="outline" size="lg">
                Переглянути портфоліо
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
