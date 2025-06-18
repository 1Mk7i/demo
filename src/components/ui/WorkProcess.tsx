interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

interface WorkProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

const defaultSteps: ProcessStep[] = [
  { step: "01", title: "Аналіз", desc: "Вивчаємо ваші потреби та цілі", icon: "🔍" },
  { step: "02", title: "Планування", desc: "Розробляємо детальний план проєкту", icon: "📋" },
  { step: "03", title: "Розробка", desc: "Створюємо ваш продукт з увагою до деталей", icon: "⚡" },
  { step: "04", title: "Запуск", desc: "Тестуємо та запускаємо готовий продукт", icon: "🚀" }
];

export default function WorkProcess({ 
  title = "Процес роботи",
  subtitle = "Структурований підхід до реалізації ваших ідей",
  steps = defaultSteps,
  className = ""
}: WorkProcessProps) {
  return (
    <div className={`bg-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((phase, index) => (
            <div 
              key={index} 
              className="text-center relative animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-white shadow-lg transform hover:scale-110 transition-transform duration-300">
                {phase.icon}
              </div>
              <div className="bg-gray-900 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                {phase.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{phase.title}</h3>
              <p className="text-gray-600">{phase.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
