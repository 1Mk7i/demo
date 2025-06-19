import { ContactInfoItem } from '../buttons';
import Card from '../cards/Card';

interface ContactInfoData {
  icon: string;
  title: string;
  content: string;
  description: string;
  gradient: string;
  hover: string;
  iconColor?: string;
  copyable?: boolean;
  href?: string;
}

interface ContactInfoProps {
  title?: string;
  items?: ContactInfoData[];
  className?: string;
  variant?: 'card' | 'list';
}

const defaultItems: ContactInfoData[] = [
  {
    icon: "📧",
    title: "Email",
    content: "ihor@gmail.com",
    description: "Напишіть мені у будь-який час",
    gradient: "from-blue-500 to-purple-600",
    hover: "hover:from-blue-600 hover:to-purple-700",
    iconColor: "text-blue-400",
    copyable: true
  },
  {
    icon: "📞",
    title: "Телефон",
    content: "+380 XX XXX XX XX",
    description: "Зателефонуйте мені для швидкої відповіді",
    gradient: "from-purple-500 to-pink-600",
    hover: "hover:from-purple-600 hover:to-pink-700",
    iconColor: "text-purple-400",
    copyable: true
  },
  {
    icon: "📍",
    title: "Адреса",
    content: "вул. Інноваційна, 123",
    description: "Київ, Україна",
    gradient: "from-green-500 to-blue-600",
    hover: "hover:from-green-600 hover:to-blue-700",
    iconColor: "text-green-400",
    copyable: true
  },
  {
    icon: "⏰",
    title: "Робочі години",
    content: "Пн-Пт: 9:00-18:00",
    description: "Сб-Нд: за домовленістю",
    gradient: "from-orange-500 to-red-600",
    hover: "hover:from-orange-600 hover:to-red-700",
    iconColor: "text-orange-400",
    copyable: false
  }
];

export default function ContactInfo({ 
  title = "Як зі мною зв'язатися",
  items = defaultItems,
  className = "",
  variant = 'card'
}: ContactInfoProps) {
  if (variant === 'list') {
    // Список варіант для Footer та інших компактних місць
    return (
      <div className={className}>
        {title && (
          <h3 className="text-lg font-bold mb-6 text-purple-400 flex items-center">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            {title}
          </h3>
        )}
        <div className="space-y-1">
          {items.map((info, index) => (
            <ContactInfoItem
              key={index}
              icon={info.icon}
              text={info.content}
              iconColor={info.iconColor || "text-blue-400"}
              label={info.title}
              copyable={info.copyable}
              href={info.href}
              tooltipText={`${info.title} скопійовано!`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Card варіант - повертаємо оригінальний дизайн з функцією копіювання
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
            copyableText={info.copyable ? info.content : undefined}
          />
        ))}
      </div>
    </div>
  );
}
