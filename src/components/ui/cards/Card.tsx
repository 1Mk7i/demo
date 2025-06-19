'use client';

import { useState } from 'react';
import { Tooltip } from '../buttons';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  gradient?: string;
  hoverGradient?: string;
  children?: React.ReactNode;
  className?: string;
  animationDelay?: number;
  copyableText?: string;
  copyTooltipText?: string;
}

export default function Card({ 
  title, 
  description, 
  icon, 
  gradient = "from-blue-500 to-purple-600",
  hoverGradient = "hover:from-blue-600 hover:to-purple-700",
  children,
  className = "",
  animationDelay = 0,
  copyableText,
  copyTooltipText = "Скопійовано!"
}: CardProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    if (!copyableText) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(copyableText);
      setShowTooltip(true);
    } catch (err) {
      console.error('Помилка копіювання:', err);
      // Fallback для старих браузерів
      const textArea = document.createElement('textarea');
      textArea.value = copyableText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowTooltip(true);
    }
  };

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <div 
      className={`group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 animate-fade-in-up relative ${copyableText ? 'cursor-pointer' : ''} ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      onClick={copyableText ? handleCopy : undefined}
      title={copyableText ? `Натисніть, щоб скопіювати ${title}` : undefined}
    >      <div className="flex items-start">
        {icon && (
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} ${hoverGradient} flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {title}
            </h3>
            {copyableText && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-gray-400 text-sm">📋</span>
              </div>
            )}
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          {children}
        </div>
      </div>
      
      {copyableText && (
        <Tooltip 
          text={copyTooltipText}
          isVisible={showTooltip}
          onHide={handleHideTooltip}
          position="top"
        />
      )}
    </div>
  );
}
