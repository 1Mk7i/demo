'use client';

import { useState, useEffect } from 'react';
import { 
  HeroSection, 
  Section, 
  BlogGrid,
  Pagination,
  AnimationStyles 
} from '@/components/ui';
import { getAllPosts, PostWithSlug } from '@/utils/posts';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Кількість постів на сторінці

  useEffect(() => {
    // Завантажуємо пости з XML файлів
    const loadPosts = async () => {
      const xmlPosts = await getAllPosts();
      
      // Конвертуємо в формат для BlogGrid (додаємо додаткові поля)
      const formattedPosts: BlogPost[] = xmlPosts.map((post: PostWithSlug) => ({
        slug: post.slug,
        title: post.title,
        excerpt: post.content.split('\n\n')[0].slice(0, 150) + '...', // Перший абзац як анотація
        date: post.date,
        author: post.author,
        readTime: `${Math.ceil(post.content.split(' ').length / 200)} хв читання`, // Приблизний час читання
        category: getCategoryFromSlug(post.slug),
        tags: getTagsFromSlug(post.slug)
      }));
      
      setPosts(formattedPosts);
    };

    loadPosts();
  }, []);

  // Функція для визначення категорії за slug
  const getCategoryFromSlug = (slug: string): string => {
    if (slug.includes('nextjs')) return 'Next.js';
    if (slug.includes('react')) return 'React';
    if (slug.includes('typescript')) return 'TypeScript';
    if (slug.includes('nixos')) return 'NixOS';
    if (slug.includes('css')) return 'CSS';
    if (slug.includes('docker')) return 'DevOps';
    if (slug.includes('rust')) return 'Rust';
    if (slug.includes('ai') || slug.includes('machine-learning')) return 'AI/ML';
    if (slug.includes('micro-frontends')) return 'Architecture';
    if (slug.includes('graphql')) return 'GraphQL';
    return 'Веб-розробка';
  };

  // Функція для визначення тегів за slug
  const getTagsFromSlug = (slug: string): string[] => {
    const tagMap: { [key: string]: string[] } = {
      'getting-started-with-nextjs': ['Next.js', 'React', 'JavaScript', 'Веб-розробка'],
      'react-best-practices': ['React', 'Performance', 'Best Practices', 'Hooks'],
      'typescript-tips': ['TypeScript', 'JavaScript', 'Types', 'Development'],
      'nixos-tips': ['NixOS', 'Linux', 'System Administration', 'DevOps'],
      'css-grid-flexbox': ['CSS', 'Grid', 'Flexbox', 'Layout', 'Responsive Design'],
      'docker-containerization-2024': ['Docker', 'DevOps', 'Containers', 'Infrastructure'],
      'rust-systems-programming': ['Rust', 'Systems Programming', 'Memory Safety', 'Performance'],
      'ai-machine-learning-javascript': ['AI', 'Machine Learning', 'TensorFlow.js', 'JavaScript'],
      'micro-frontends-architecture': ['Micro Frontends', 'Architecture', 'Scalability', 'JavaScript'],
      'graphql-api-revolution': ['GraphQL', 'API', 'Apollo', 'Backend']
    };
    return tagMap[slug] || ['Веб-розробка'];
  };

  // Розрахунок пагінації
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
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
