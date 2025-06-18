import Link from "next/link";

interface PageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Симуляція даних постів
const posts = {
  "getting-started-with-nextjs": {
    title: "Початок роботи з Next.js",
    content: `
      Next.js - це потужний React фреймворк, який дозволяє створювати швидкі та SEO-оптимізовані веб-додатки.
      
      ## Основні переваги Next.js:
      
      1. **Server-Side Rendering (SSR)** - рендеринг сторінок на сервері
      2. **Static Site Generation (SSG)** - генерація статичних сайтів
      3. **Автоматичне розділення коду** - оптимізація завантаження
      4. **Вбудована оптимізація** - автоматична оптимізація зображень та шрифтів
      
      ## Швидкий старт:
      
      \`\`\`bash
      npx create-next-app@latest my-app
      cd my-app
      npm run dev
      \`\`\`
      
      Це все, що потрібно для початку роботи з Next.js!
    `,
    date: "2024-01-15",
    author: "Джон Доу"
  },
  "react-best-practices": {
    title: "Кращі практики React",
    content: `
      React - це бібліотека для створення користувацьких інтерфейсів. Ось кілька кращих практик.
      
      ## Організація компонентів:
      
      1. Використовуйте функціональні компоненти з хуками
      2. Розділяйте логіку на кастомні хуки
      3. Дотримуйтесь принципу єдиної відповідальності
      
      ## Оптимізація продуктивності:
      
      - Використовуйте React.memo для мемоізації компонентів
      - Оптимізуйте ре-рендери з useCallback та useMemo
      - Ледаче завантаження компонентів з React.lazy
    `,
    date: "2024-01-10",
    author: "Джейн Сміт"
  },
  "typescript-tips": {
    title: "Поради по TypeScript",
    content: `
      TypeScript додає статичну типізацію до JavaScript, що робить код більш надійним.
      
      ## Основні поради:
      
      1. **Використовуйте строгі типи** - уникайте \`any\`
      2. **Створюйте інтерфейси** для об'єктів
      3. **Використовуйте юніон типи** для гнучкості
      
      ## Приклад інтерфейсу:
      
      \`\`\`typescript
      interface User {
        id: number;
        name: string;
        email?: string;
      }
      \`\`\`
    `,
    date: "2024-01-05",
    author: "Майк Джонсон"
  }
};

// Генерація статичних параметрів для всіх постів
export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export default function BlogPost({ params }: PageProps) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">Пост не знайдено</h1>
        <p className="text-gray-600 mb-8">Вибачте, але цей пост не існує.</p>
        <Link 
          href="/blog"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          ← Повернутися до блогу
        </Link>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-8 py-12 text-white">
            <div className="mb-6">
              <Link 
                href="/blog"
                className="inline-flex items-center text-blue-100 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Повернутися до блогу
              </Link>
            </div>
            
            <header>
              <h1 className="text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
              <div className="flex flex-wrap gap-4 items-center text-blue-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString("uk-UA")}
                </div>
              </div>
            </header>
          </div>        
        <div className="prose prose-xl max-w-none px-8 py-12">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-blue-500 pl-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('```')) {
              return (
                <div key={index} className="my-8">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto shadow-lg border border-gray-700">
                    <code className="text-sm font-mono">{paragraph.replace(/```\w*\n?|\n?```/g, '')}</code>
                  </pre>
                </div>
              );
            }
            if (paragraph.includes('`') && !paragraph.startsWith('```')) {
              return (
                <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                  {paragraph.split('`').map((part, i) => 
                    i % 2 === 0 ? part : <code key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-sm">{part}</code>
                  )}
                </p>
              );
            }
            if (paragraph.trim().match(/^\d+\./)) {
              return (
                <div key={index} className="my-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <ol className="list-decimal list-inside space-y-3">
                    {paragraph.split('\n').filter(line => line.trim()).map((item, i) => (
                      <li key={i} className="text-lg text-gray-700 font-medium">{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                </div>
              );
            }
            if (paragraph.trim().startsWith('-')) {
              return (
                <div key={index} className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                  <ul className="list-disc list-inside space-y-3">
                    {paragraph.split('\n').filter(line => line.trim()).map((item, i) => (
                      <li key={i} className="text-lg text-gray-700">{item.replace(/^-\s*/, '')}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
                {paragraph.trim()}
              </p>
            );
          })}
        </div>
      </article>
      
      {/* Related Articles Section */}
      <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Схожі статті</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(posts).filter(([slug]) => slug !== params.slug).slice(0, 2).map(([slug, relatedPost]) => (
            <Link key={slug} href={`/blog/${slug}`} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border hover:border-blue-300">
                <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h4>
                <p className="text-gray-600 text-sm">{relatedPost.author} • {new Date(relatedPost.date).toLocaleDateString("uk-UA")}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}
