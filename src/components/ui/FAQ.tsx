interface FAQItem {
  question: string;
  answer: string;
  icon?: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  className?: string;
}

export default function FAQ({ 
  items, 
  title = "Часті питання",
  showButton = true,
  buttonText = "Задати питання",
  className = ""
}: FAQProps) {
  return (
    <div className={`bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">{title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {items.map((faq, index) => (
          <div 
            key={index} 
            className="group p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
          >
            <div className="flex items-start mb-3">
              {faq.icon && (
                <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  {faq.icon}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                {faq.question}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed ml-11">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      {showButton && (
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Не знайшли відповідь на ваше питання?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}
