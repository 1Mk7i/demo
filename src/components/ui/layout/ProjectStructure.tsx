import { gradientClasses } from "../utils/gradients";

interface ProjectStructureProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ProjectStructure({ 
  title = "Як це працює?",
  subtitle = "Next.js App Router використовує файлову систему для створення маршрутів",
  className = ""
}: ProjectStructureProps) {
  const fileStructure = [
    { type: 'folder', name: 'src/', level: 0 },
    { type: 'folder', name: 'app/', level: 1 },
    { type: 'file', name: 'page.tsx', level: 2, route: '/' },
    { type: 'file', name: 'layout.tsx', level: 2 },
    { type: 'file', name: 'globals.css', level: 2 },
    { type: 'folder', name: 'about/', level: 2 },
    { type: 'file', name: 'page.tsx', level: 3, route: '/about' },
    { type: 'folder', name: 'blog/', level: 2 },
    { type: 'file', name: 'page.tsx', level: 3, route: '/blog' },
    { type: 'folder', name: '[slug]/', level: 3 },
    { type: 'file', name: 'page.tsx', level: 4, route: '/blog/[slug]' },
    { type: 'folder', name: 'contact/', level: 2 },
    { type: 'file', name: 'page.tsx', level: 3, route: '/contact' },
    { type: 'folder', name: 'services/', level: 2 },
    { type: 'file', name: 'page.tsx', level: 3, route: '/services' },
    { type: 'folder', name: 'components/', level: 1 },
    { type: 'folder', name: 'layout/', level: 2 },
    { type: 'file', name: 'Navigation.tsx', level: 3 },
    { type: 'file', name: 'Footer.tsx', level: 3 },
    { type: 'folder', name: 'ui/', level: 2 },
    { type: 'folder', name: 'buttons/', level: 3 },
    { type: 'folder', name: 'cards/', level: 3 },
    { type: 'folder', name: 'grids/', level: 3 },
    { type: 'folder', name: 'sections/', level: 3 }
  ];

  const technologies = [
    { name: "Next.js 14+", icon: "⚛️", description: "React Framework" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS" },
    { name: "TypeScript", icon: "📘", description: "Type Safety" }  ];
  return (
    <div className={`${gradientClasses.projectStructureBg} text-white py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Структура файлів</h3>
              <div className="space-y-4 font-mono text-sm">
                {fileStructure.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center animate-fade-in-up"
                    style={{ 
                      marginLeft: `${item.level * 16}px`,
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className={item.type === 'folder' ? 'text-yellow-400' : 'text-blue-400'}>
                      {item.type === 'folder' ? '📁' : '📄'}
                    </span>
                    <span className="ml-2 text-blue-100">{item.name}</span>
                    {item.route && (
                      <span className="ml-4 text-green-400">→ {item.route}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Технології</h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="flex items-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${(index + fileStructure.length) * 100}ms` }}
                  >
                    <span className="text-2xl mr-3">{tech.icon}</span>
                    <div>
                      <div className="font-semibold">{tech.name}</div>
                      <div className="text-sm text-gray-400">{tech.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
