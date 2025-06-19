interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
}

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({ 
  title,
  subtitle,
  features,
  columns = 3,
  className = ""
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={className}>
      {title && (
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">{title}</h2>
          {subtitle && (
            <p className="text-xl leading-relaxed text-gray-600 mb-8">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className={`grid ${gridCols[columns]} gap-8 mt-16`}>
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`text-4xl mb-4 ${feature.gradient ? `bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent` : ''}`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
