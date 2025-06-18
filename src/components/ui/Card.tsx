interface CardProps {
  title: string;
  description: string;
  icon?: string;
  gradient?: string;
  hoverGradient?: string;
  children?: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export default function Card({ 
  title, 
  description, 
  icon, 
  gradient = "from-blue-500 to-purple-600",
  hoverGradient = "hover:from-blue-600 hover:to-purple-700",
  children,
  className = "",
  animationDelay = 0
}: CardProps) {
  return (
    <div 
      className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="flex items-start">
        {icon && (
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} ${hoverGradient} flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
