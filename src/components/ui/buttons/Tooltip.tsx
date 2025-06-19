'use client';

import { useEffect } from 'react';

interface TooltipProps {
  text: string;
  isVisible: boolean;
  onHide: () => void;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export default function Tooltip({ 
  text, 
  isVisible, 
  onHide, 
  position = 'top',
  className = "" 
}: TooltipProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000); // Скрыть через 2 секунды

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-green-600',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-green-600',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-green-600',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-green-600'
  };

  return (
    <div className={`absolute z-50 ${positionClasses[position]} ${className}`}>
      <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg animate-fade-in-up">
        <div className="flex items-center space-x-1">
          <span className="text-green-200">✓</span>
          <span>{text}</span>
        </div>
        {/* Стрелка */}
        <div className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}></div>
      </div>
    </div>
  );
}
