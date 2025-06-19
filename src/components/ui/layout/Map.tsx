interface MapProps {
  address?: string;
  city?: string;
  label?: string;
  className?: string;
  height?: string;
  showLabel?: boolean;
}

export default function Map({
  address = "вул. Інноваційна, 123",
  city = "Київ",
  label = "Офіс",
  className = "",
  height = "h-64",
  showLabel = true
}: MapProps) {
  const fullAddress = `${address}, ${city}`;

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      <div className={`${height} bg-gradient-to-br from-blue-100 to-purple-100 relative`}>
        {/* Центральний контент карти */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🗺️</div>
            <p className="text-gray-600 font-medium">Інтерактивна карта</p>
            <p className="text-sm text-gray-500">{fullAddress}</p>
          </div>
        </div>

        {/* Лейбл офісу */}
        {showLabel && (
          <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 shadow-md animate-fade-in">
            <span className="text-sm text-gray-600">📍 {label}</span>
          </div>
        )}

        {/* Декоративні елементи */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Gradient overlay для кращого вигляду */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

        {/* Hover ефект */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"></div>
      </div>

      {/* Додаткова інформація під картою */}
      <div className="p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">📍</span>
            <span className="text-sm font-medium text-gray-700">{fullAddress}</span>
          </div>
          <button 
            className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            onClick={() => {
              // В реальному проєкті тут був би виклик Google Maps або іншого картографічного сервісу
              const encodedAddress = encodeURIComponent(fullAddress);
              window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
            }}
          >
            Відкрити в Google Maps →
          </button>
        </div>
      </div>
    </div>
  );
}
