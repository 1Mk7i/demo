'use client';

import { useState } from 'react';
import Tooltip from './Tooltip';

interface ContactInfoItemProps {
  icon: string;
  text: string;
  iconColor?: string;
  copyable?: boolean;
  href?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  tooltipText?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export default function ContactInfoItem({
  icon,
  text,
  iconColor = 'text-blue-400',
  copyable = true,
  href,
  label,
  className = '',
  style,
  tooltipText = 'Скопійовано!',
  tooltipPosition = 'top'
}: ContactInfoItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    if (!copyable) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(text);
      setShowTooltip(true);
    } catch (err) {
      console.error('Помилка копіювання:', err);
      // Fallback для старих браузерів
      const textArea = document.createElement('textarea');
      textArea.value = text;
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
  const content = (
    <div 
      className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer relative group ${className}`}
      style={style}
      onClick={handleCopy}
      title={copyable ? `Натисніть, щоб скопіювати ${label || text}` : undefined}
    >
      <span className={`text-xl ${iconColor} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </span>
      <div className="flex-1">
        {label && (
          <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {label}
          </div>
        )}
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
          {text}
        </span>
      </div>
      {copyable && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-400">
            📋
          </span>
        </div>
      )}
      
      <Tooltip 
        text={tooltipText}
        isVisible={showTooltip}
        onHide={handleHideTooltip}
        position={tooltipPosition}
      />
    </div>
  );

  // Если передан href, оборачиваем в ссылку
  if (href && !copyable) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
