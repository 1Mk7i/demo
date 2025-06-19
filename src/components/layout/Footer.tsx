import Link from "next/link";
import { gradientClasses, gradients } from "../ui/utils/gradients";
import ContactInfo from "../ui/layout/ContactInfo";

const quickLinks = [
  { href: "/about", label: "Про мене" },
  { href: "/services", label: "Послуги" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакти" }
];

const socialLinks = [
  { icon: "💼", label: "LinkedIn", href: "#" },
  { icon: "🐙", label: "GitHub", href: "#" },
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "📷", label: "Instagram", href: "#" }
];

export default function Footer() {
  return (
    <footer className={`${gradientClasses.footerBg} text-white relative overflow-hidden`}>      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className={`w-10 h-10 bg-gradient-to-r ${gradients.card} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold">N</span>
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                Next.js Demo
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Демонстраційний сайт, створений для навчання та показу можливостей Next.js App Router. 
              Використовуються сучасні технології веб-розробки.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 hover:bg-gradient-to-r hover:${gradients.card} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-white/20 group`}
                  title={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Швидкі посилання
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>          
          
          <ContactInfo 
            title="Контакти"
            variant="list"
            items={[
              {
                icon: "📧",
                title: "Email",
                content: "hello@example.com",
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
                description: "Зателефонуйте для швидкої відповіді",
                gradient: "from-purple-500 to-pink-600",
                hover: "hover:from-purple-600 hover:to-pink-700",
                iconColor: "text-purple-400",
                copyable: true
              },
              {
                icon: "📍",
                title: "Локація",
                content: "Київ, Україна", 
                description: "Моя робоча адреса",
                gradient: "from-green-500 to-blue-600",
                hover: "hover:from-green-600 hover:to-blue-700",
                iconColor: "text-green-400",
                copyable: true
              }
            ]}
          />
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Next.js Demo. Всі права захищені. Створено для навчальних цілей.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Політика конфіденційності</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Умови використання</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
