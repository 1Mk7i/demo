import { gradientClasses } from "../utils/gradients";

interface TechItem {
  name: string;
  icon: string;
  description: string;
}

interface TechStackProps {
  title?: string;
  subtitle?: string;
  technologies?: TechItem[];
  className?: string;
}

const defaultTechnologies: TechItem[] = [
  { name: "Next.js 14+", icon: "⚛️", description: "React фреймворк нового покоління" },
  { name: "TypeScript", icon: "📘", description: "Статична типізація для JavaScript" },
  { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS фреймворк" },
  { name: "React 18", icon: "⚛️", description: "Бібліотека для побудови UI" }
];

export default function TechStack({ 
  title = "Використані технології",
  subtitle = "Тут ви можете ознайомитися з технологіями, які я використав для створення цього сайту",
  technologies = defaultTechnologies,
  className = ""
}: TechStackProps) {  return (
    <div className={`${gradientClasses.projectStructureBg} text-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 text-center transform hover:-translate-y-1 hover:shadow-xl animate-fade-in-up border border-white/20 hover:border-white/40"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4 animate-scale-in" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">{tech.name}</h3>
              <p className="text-blue-100 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
