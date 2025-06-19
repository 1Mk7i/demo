'use client';

interface NavigationItem {
  href: string;
  label: string;
  icon: string;
}

interface MobileMenuProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
  onLinkClick: () => void;
}

export default function MobileMenu({ items, isOpen, onClose, onLinkClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl z-50 md:hidden border-t border-gray-200/50">
        <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onLinkClick}
              className={`flex items-center space-x-4 px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-xl transition-all duration-300 font-medium group animate-slide-in-left border border-transparent hover:border-blue-200 shadow-sm hover:shadow-md`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <div className="flex-1">
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                →
              </span>
            </a>
          ))}
          
          {/* Дополнительная информация */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <div>                  <p className="text-sm font-medium text-gray-700">Маєте питання?</p>
                  <p className="text-xs text-gray-500">Зв&apos;яжіться з нами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
