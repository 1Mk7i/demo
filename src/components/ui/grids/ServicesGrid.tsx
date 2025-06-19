interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 mr-4`}>
            {service.icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {service.title}
            </h2>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Features */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className={`w-full py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
          Дізнатися більше
        </button>
      </div>
      
      {/* Hover Effect */}
      <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  );
}

interface ServicesGridProps {
  services: Service[];
  className?: string;
}

export default function ServicesGrid({ services, className = "" }: ServicesGridProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto ${className}`}>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
}
