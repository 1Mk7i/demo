interface AboutAuthorProps {
  title?: string;
  subtitle?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  description?: string;
  skills?: string[];
  experience?: string;
  className?: string;
}

export default function AboutAuthor({ 
  title = "Про автора",
  subtitle = "Дізнайтеся більше про мене та мій шлях у веб-розробці",
  authorName = "Ігор Євлахович",
  authorRole = "NextJS Developer",
  authorAvatar = "👨‍💻",
  description = "Вітаю! Я - веб-розробник з пристрастю до створення сучасних та функціональних веб-додатків. Моя мета - втілювати ідеї в життя за допомогою коду та надавати користувачам неперевершений досвід.",
  skills = ["React", "TypeScript", "Node.js", "Next.js", "Python", "PostgreSQL"],
  experience = "5+ років досвіду",
  className = ""
}: AboutAuthorProps) {
  return (
    <div className={`bg-gradient-to-br from-gray-50 to-blue-50 py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Ліва частина - зображення та базова інформація */}
              <div className="text-center md:text-left">
                <div className="relative mb-6 inline-block">
                  <div className="w-40 h-40 mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-8xl hover:scale-105 transition-transform duration-300 shadow-lg">
                    {authorAvatar}
                  </div>
                  <div className="absolute inset-0 w-40 h-40 mx-auto md:mx-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-gray-800">
                  {authorName}
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">{authorRole}</p>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                  {experience}
                </div>
              </div>
              
              {/* Права частина - опис та навички */}
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {description}
                </p>
                
                {/* Навички */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Основні технології:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={skill}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Додаткова інформація */}                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 italic">
                    &ldquo;Кожен проєкт - це можливість створити щось особливе та корисне для людей. 
                    Я завжди прагну вдосконалюватися та вивчати нові технології.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
