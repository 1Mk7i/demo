import Card from './Card';

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  description: string;
  gradient: string;
  hover: string;
}

interface ContactInfoProps {
  title?: string;
  items?: ContactInfoItem[];
  className?: string;
}

const defaultItems: ContactInfoItem[] = [
  {
    icon: "📧",
    title: "Email",
    content: "ihor@gmail.com",
    description: "Напишіть мені у будь-який час",
    gradient: "from-blue-500 to-purple-600",
    hover: "hover:from-blue-600 hover:to-purple-700"
  },
  {
    icon: "📞",
    title: "Телефон",
    content: "+380 XX XXX XX XX",
    description: "Зателефонуйте мені для швидкої відповіді",
    gradient: "from-purple-500 to-pink-600",
    hover: "hover:from-purple-600 hover:to-pink-700"
  },
  {
    icon: "📍",
    title: "Адреса",
    content: "вул. Інноваційна, 123",
    description: "Київ, Україна",
    gradient: "from-green-500 to-blue-600",
    hover: "hover:from-green-600 hover:to-blue-700"
  },
  {
    icon: "⏰",
    title: "Робочі години",
    content: "Пн-Пт: 9:00-18:00",
    description: "Сб-Нд: за домовленістю",
    gradient: "from-orange-500 to-red-600",
    hover: "hover:from-orange-600 hover:to-red-700"
  }
];

export default function ContactInfo({ 
  title = "Як зі мною зв'язатися",
  items = defaultItems,
  className = ""
}: ContactInfoProps) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold mb-8 text-gray-800">{title}</h2>
      <div className="space-y-6">
        {items.map((info, index) => (
          <Card
            key={index}
            title={info.title}
            description={`${info.content} - ${info.description}`}
            icon={info.icon}
            gradient={info.gradient}
            hoverGradient={info.hover}
            animationDelay={index * 150}
          />
        ))}
      </div>
    </div>
  );
}
