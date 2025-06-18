'use client';

import { useState } from 'react';
import { 
  HeroSection, 
  Section, 
  BlogGrid,
  Pagination,
  AnimationStyles 
} from '@/components/ui';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Кількість постів на сторінці

  const posts = [
    {
      slug: "getting-started-with-nextjs",
      title: "Початок роботи з Next.js",
      excerpt: "Дізнайтеся, як швидко почати розробку з Next.js та створити свій перший проєкт з використанням найкращих практик сучасної веб-розробки.",
      date: "2024-01-15",
      author: "Джон Доу",
      readTime: "5 хв читання",
      category: "Next.js",
      tags: ["Next.js", "React", "JavaScript", "Веб-розробка"]
    },
    {
      slug: "react-best-practices",
      title: "Кращі практики React",
      excerpt: "Поради та рекомендації для ефективної розробки на React. Вивчіть передові техніки оптимізації продуктивності та структурування коду.",
      date: "2024-01-10",
      author: "Джейн Сміт",
      readTime: "8 хв читання",
      category: "React",
      tags: ["React", "Performance", "Best Practices", "Hooks"]
    },
    {
      slug: "typescript-tips",
      title: "Поради по TypeScript",
      excerpt: "Корисні поради для роботи з TypeScript у ваших проєктах. Дізнайтеся про передові типи, утиліти та паттерни розробки.",
      date: "2024-01-05",
      author: "Майк Джонсон",
      readTime: "6 хв читання",
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Types", "Development"]
    },
    {
      slug: "css-grid-flexbox",
      title: "CSS Grid та Flexbox",
      excerpt: "Вивчіть сучасні методи CSS-розкладки для створення адаптивних та гнучких інтерфейсів.",
      date: "2024-01-03",
      author: "Ліза Вілсон",
      readTime: "7 хв читання",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout"]
    },
    {
      slug: "node-js-performance",
      title: "Оптимізація Node.js",
      excerpt: "Техніки підвищення продуктивності Node.js-додатків та найкращі практики бекенд-розробки.",
      date: "2024-01-01",
      author: "Алекс Браун",
      readTime: "10 хв читання",
      category: "Node.js",
      tags: ["Node.js", "Performance", "Backend", "Optimization"]
    },
    {
      slug: "database-design-principles",
      title: "Принципи проєктування БД",
      excerpt: "Основи проєктування баз даних, нормалізація та оптимізація запитів для ефективної роботи з даними.",
      date: "2023-12-28",
      author: "Сара Девіс",
      readTime: "12 хв читання",
      category: "Database",
      tags: ["Database", "SQL", "Design", "Optimization"]
    },
    {
      slug: "api-security-best-practices",
      title: "Безпека API",
      excerpt: "Найкращі практики забезпечення безпеки API, аутентифікація, авторизація та захист від атак.",
      date: "2023-12-25",
      author: "Том Андерсон",
      readTime: "9 хв читання",
      category: "Security",
      tags: ["API", "Security", "Authentication", "Best Practices"]
    },
    {
      slug: "mobile-first-design",
      title: "Mobile-First дизайн",
      excerpt: "Підходи до створення адаптивного дизайну з пріоритетом мобільних пристроїв.",
      date: "2023-12-20",
      author: "Емма Тейлор",
      readTime: "6 хв читання",
      category: "Design",
      tags: ["Mobile", "Design", "Responsive", "UX"]
    }  ];

  // Розрахунок пагінації
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);  const handlePageChange = (page: number) => {
    console.log(`Зміна сторінки на: ${page}`);
    setCurrentPage(page);
    setTimeout(() => {
      console.log('Виконуємо прокрутку до верху сторінки');
      const blogTop = document.getElementById('blog-top');
      if (blogTop) {
        console.log('Прокрутка до елемента blog-top');
        blogTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.log('Fallback - стандартна прокрутка');
        window.scrollTo({ 
          top: 0, 
          left: 0,
          behavior: 'smooth' 
        });
      }
    }, 150);
  };
  return (
    <main id="blog-top" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <AnimationStyles />
        <HeroSection
        title="Блог"
        subtitle="Останні статті про веб-розробку, технології та кращі практики"
      />
      
      <Section>        <div className="max-w-6xl mx-auto" data-blog-content>
          <BlogGrid posts={currentPosts} />
          
          {/* Розумна пагінація - не показується, якщо тільки одна сторінка */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-16"
          />
        </div>
      </Section>
    </main>
  );
}
