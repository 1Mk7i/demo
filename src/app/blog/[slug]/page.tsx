import Link from "next/link";
import { getPost, getAllPostSlugs, getAllPosts } from "@/utils/posts";
import { ReactElement } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Генерація статичних параметрів для всіх постів
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}


export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

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

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);
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
          {(() => {
            const content = post.content;
            const parts: ReactElement[] = [];
            let currentIndex = 0;
            
            // Розділяємо контент, зберігаючи цілісність блоків коду
            const paragraphs = content.split('\n\n');
            let i = 0;
            
            while (i < paragraphs.length) {
              let paragraph = paragraphs[i];
              
              // Якщо це початок блоку коду, збираємо весь блок
              if (paragraph.startsWith('```')) {
                while (i < paragraphs.length && !paragraph.includes('```', 3)) {
                  i++;
                  if (i < paragraphs.length) {
                    paragraph += '\n\n' + paragraphs[i];
                  }
                }
                
                // Тепер обробляємо повний блок коду
                const codeMatch = paragraph.match(/```(\w+)?\n?([\s\S]*?)```/);
                const code = codeMatch ? codeMatch[2] : paragraph.replace(/```\w*\n?|\n?```$/g, '');
                
                parts.push(
                  <div key={currentIndex++} className="my-8">
                    <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto shadow-lg border border-gray-700">
                      <code className="text-sm font-mono">{code}</code>
                    </pre>
                  </div>
                );
              }
              // Заголовки
              else if (paragraph.startsWith('##')) {
                parts.push(
                  <h2 key={currentIndex++} className="text-3xl font-bold mt-12 mb-6 text-gray-800 border-l-4 border-blue-500 pl-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              // Inline код
              else if (paragraph.includes('`') && !paragraph.startsWith('```')) {
                parts.push(
                  <p key={currentIndex++} className="mb-6 text-lg leading-relaxed text-gray-700">
                    {paragraph.split('`').map((part: string, partIndex: number) => 
                      partIndex % 2 === 0 ? part : <code key={partIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-mono text-sm">{part}</code>
                    )}
                  </p>
                );
              }
              // Нумеровані списки
              else if (paragraph.trim().match(/^\d+\./)) {
                parts.push(
                  <div key={currentIndex++} className="my-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <ol className="list-decimal list-inside space-y-3">
                      {paragraph.split('\n').filter((line: string) => line.trim()).map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="text-lg text-gray-700 font-medium">{item.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  </div>
                );
              }
              // Маркеровані списки
              else if (paragraph.trim().startsWith('-')) {
                parts.push(
                  <div key={currentIndex++} className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
                    <ul className="list-disc list-inside space-y-3">
                      {paragraph.split('\n').filter((line: string) => line.trim()).map((item: string, itemIndex: number) => (
                        <li key={itemIndex} className="text-lg text-gray-700">{item.replace(/^-\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              // Звичайні параграфи
              else if (paragraph.trim()) {
                parts.push(
                  <p key={currentIndex++} className="mb-6 text-lg leading-relaxed text-gray-700">
                    {paragraph.trim()}
                  </p>
                );
              }
              
              i++;
            }
            
            return parts;
          })()}
        </div>
      </article>
      
      {/* Related Articles Section */}
      <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Схожі статті</h3>        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border hover:border-blue-300">
                <h4 className="font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{relatedPost.title}</h4>
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
