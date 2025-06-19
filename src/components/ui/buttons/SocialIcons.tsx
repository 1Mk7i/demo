interface SocialIconsProps {
  title?: string;
  className?: string;
}

export default function SocialIcons({ title = "Слідкуйте за мною", className = "" }: SocialIconsProps) {
  const socialLinks = [
    { platform: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700", hover: "hover:from-blue-700 hover:to-blue-800" },
    { platform: "GitHub", icon: "🐙", color: "from-slate-600 to-slate-700", hover: "hover:from-slate-700 hover:to-slate-800" },
    { platform: "Twitter", icon: "🐦", color: "from-sky-400 to-sky-600", hover: "hover:from-sky-500 hover:to-sky-700" },
    { platform: "Instagram", icon: "📷", color: "from-pink-500 to-purple-600", hover: "hover:from-pink-600 hover:to-purple-700" }
  ];

  return (
    <div className={className}>
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <button
            key={index}
            className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.color} ${social.hover} flex items-center justify-center text-xl transition-all duration-300 shadow-lg transform hover:scale-110 hover:-translate-y-1`}
            title={social.platform}
          >
            {social.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
