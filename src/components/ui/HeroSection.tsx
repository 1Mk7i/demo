interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundGradient?: string;
  showAnimation?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundGradient = "from-blue-600 via-purple-600 to-indigo-600",
  showAnimation = true,
  children 
}: HeroSectionProps) {
  return (
    <div className={`relative bg-gradient-to-r ${backgroundGradient} text-white overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20"></div>
      {showAnimation && (
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-pulse"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto animate-fade-in-delay">
            {subtitle}
          </p>
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
