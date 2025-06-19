// Централізовані градієнти для узгодженого дизайну
export const gradients = {
  // Основні градієнти
  primary: 'from-blue-600 to-purple-600',
  primaryHover: 'hover:from-blue-700 hover:to-purple-700',
  
  // Фонові градієнти для секцій
  darkSection: 'from-slate-800 via-blue-800 to-purple-800',
  lightSection: 'from-blue-50 via-white to-purple-50',
  
  // Дуже темні градієнти
  footerDark: 'from-gray-900 via-slate-900 to-zinc-900',
  projectStructureDark: 'from-purple-950 via-blue-950 to-slate-950',
  ultraDark: 'from-slate-950 via-blue-950 to-purple-950',
  
  // Інвертовані градієнти
  inverted: 'from-purple-800 via-blue-800 to-slate-800',
  invertedDark: 'from-purple-950 via-blue-950 to-slate-950',
  
  // Карточки та компоненти
  card: 'from-blue-500 to-purple-600',
  cardHover: 'hover:from-blue-600 hover:to-purple-700',
  cardLight: 'from-blue-400 to-purple-600',
  
  // Текстові градієнти
  text: 'from-blue-600 to-purple-600',
  textHover: 'hover:from-purple-600 hover:to-blue-600',
  textLight: 'from-blue-400 to-purple-400',
  
  // Герой секція
  hero: 'from-blue-600 via-purple-600 to-indigo-600',
  
  // Блог та контент
  blogHero: 'from-blue-100 to-purple-100',
  blogContent: 'from-blue-50 to-indigo-50',
  
  // Радіальні градієнти для фонів
  radialBlue: 'radial-gradient(circle_at_30%_20%, rgba(59,130,246,0.4), transparent 50%)',
  radialPurple: 'radial-gradient(circle_at_70%_80%, rgba(147,51,234,0.4), transparent 50%)',
  
  // Тонкі радіальні градієнти для темних фонів
  radialBlueSubtle: 'radial-gradient(circle_at_30%_20%, rgba(59,130,246,0.1), transparent 50%)',
  radialPurpleSubtle: 'radial-gradient(circle_at_70%_80%, rgba(147,51,234,0.1), transparent 50%)',
  
  // Соцмережі
  linkedin: 'from-blue-600 to-blue-700',
  github: 'from-slate-600 to-slate-700',
  twitter: 'from-sky-400 to-sky-600',
  instagram: 'from-pink-500 to-purple-600',
} as const;

// Напрямки градієнтів
export const gradientDirections = {
  topLeft: 'bg-gradient-to-tl',
  topRight: 'bg-gradient-to-tr', 
  bottomLeft: 'bg-gradient-to-bl',
  bottomRight: 'bg-gradient-to-br',
  top: 'bg-gradient-to-t',
  bottom: 'bg-gradient-to-b',
  left: 'bg-gradient-to-l',
  right: 'bg-gradient-to-r',
} as const;

// Допоміжні класи для швидкого застосування
export const gradientClasses = {
  // Фони
  primaryBg: `bg-gradient-to-r ${gradients.primary}`,
  primaryBgHover: `bg-gradient-to-r ${gradients.primary} ${gradients.primaryHover}`,
  darkSectionBg: `bg-gradient-to-br ${gradients.darkSection}`,
  lightSectionBg: `bg-gradient-to-br ${gradients.lightSection}`,
  footerBg: `bg-gradient-to-br ${gradients.footerDark}`,
  projectStructureBg: `bg-gradient-to-tl ${gradients.projectStructureDark}`,
  ultraDarkBg: `bg-gradient-to-br ${gradients.ultraDark}`,
  heroBg: `bg-gradient-to-r ${gradients.hero}`,
  
  // Тексти
  primaryText: `bg-gradient-to-r ${gradients.text} bg-clip-text text-transparent`,
  primaryTextHover: `bg-gradient-to-r ${gradients.text} bg-clip-text text-transparent ${gradients.textHover}`,
  lightText: `bg-gradient-to-r ${gradients.textLight} bg-clip-text text-transparent`,
  
  // Кнопки та елементи
  primaryButton: `bg-gradient-to-r ${gradients.primary} text-white ${gradients.primaryHover}`,
  cardBg: `bg-gradient-to-r ${gradients.card}`,
  cardBgHover: `bg-gradient-to-r ${gradients.card} ${gradients.cardHover}`,
  
  // Спеціальні елементи
  glassCard: 'bg-white/10 backdrop-blur-sm border border-white/20',
  blogCard: `bg-gradient-to-br ${gradients.blogHero}`,
  accent: `bg-gradient-to-r ${gradients.cardLight}`,
} as const;

/**
 * Функція для створення кастомного градієнту
 * @param direction - напрямок градієнту
 * @param colors - строка з кольорами градієнту
 * @returns готовий клас Tailwind CSS
 */
export function createGradient(
  direction: keyof typeof gradientDirections,
  colors: string
): string {
  return `${gradientDirections[direction]} ${colors}`;
}

/**
 * Функція для інверсії градієнту по напрямку
 * @param gradientClass - початковий клас градієнту
 * @returns інвертований градієнт
 */
export function invertGradientDirection(gradientClass: string): string {
  const directionMap: Record<string, string> = {
    'bg-gradient-to-tl': 'bg-gradient-to-br',
    'bg-gradient-to-tr': 'bg-gradient-to-bl', 
    'bg-gradient-to-bl': 'bg-gradient-to-tr',
    'bg-gradient-to-br': 'bg-gradient-to-tl',
    'bg-gradient-to-t': 'bg-gradient-to-b',
    'bg-gradient-to-b': 'bg-gradient-to-t',
    'bg-gradient-to-l': 'bg-gradient-to-r',
    'bg-gradient-to-r': 'bg-gradient-to-l',
  };
  
  for (const [original, inverted] of Object.entries(directionMap)) {
    if (gradientClass.includes(original)) {
      return gradientClass.replace(original, inverted);
    }
  }
  
  return gradientClass;
}
