import Link from "next/link";

interface NavigationCard {
  href: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface NavigationCardsProps {
  title?: string;
  subtitle?: string;
  cards: NavigationCard[];
  className?: string;
}

export default function NavigationCards({ 
  title = "Досліджуйте мій сайт",
  subtitle = "Кожна сторінка демонструє різні можливості Next.js та сучасного веб-дизайну",
  cards,
  className = ""
}: NavigationCardsProps) {
  return (
    <div className={className}>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {card.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
                {card.description}
              </p>
              
              <div className="flex items-center text-blue-500 group-hover:text-purple-600 transition-colors duration-300">
                <span className="font-medium">Перейти</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
