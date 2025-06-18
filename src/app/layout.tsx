import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Demo - Навчальний проєкт",
  description: "Демонстрація створення сторінок у Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    Next.js Demo
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-1">
                {[
                  { href: "/", label: "Головна", icon: "🏠" },
                  { href: "/about", label: "Про мене", icon: "👥" },
                  { href: "/services", label: "Послуги", icon: "🚀" },
                  { href: "/blog", label: "Блог", icon: "📝" },
                  { href: "/contact", label: "Контакти", icon: "📞" }
                ].map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg transition-all duration-300 font-medium group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        {children}
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Next.js Demo
                  </span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Демонстраційний сайт, створений для навчання та показу можливостей Next.js App Router.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: "💼", label: "LinkedIn" },
                    { icon: "🐙", label: "GitHub" },
                    { icon: "🐦", label: "Twitter" },
                    { icon: "📷", label: "Instagram" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-400">Швидкі посилання</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/about", label: "Про мене" },
                    { href: "/services", label: "Послуги" },
                    { href: "/blog", label: "Блог" },
                    { href: "/contact", label: "Контакти" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Контакти</h3>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>📧 hello@example.com</p>
                  <p>📞 +380 XX XXX XX XX</p>
                  <p>📍 Київ, Україна</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Next.js Demo. Всі права захищені. Створено для навчальних цілей.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
