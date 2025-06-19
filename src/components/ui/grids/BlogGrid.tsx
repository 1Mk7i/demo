import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime?: string;
  tags?: string[];
  category?: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="md:flex">
        {/* Image placeholder */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl h-48 md:h-auto">
          📝
        </div>
        
        {/* Content */}
        <div className="md:w-2/3 p-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
              {post.category || 'Розробка'}
            </span>
            <span className="text-gray-500 text-sm">
              {formatDate(post.date)}
            </span>
            {post.readTime && (
              <span className="text-gray-500 text-sm">
                {post.readTime}
              </span>
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            <Link href={`/blog/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                {post.author.charAt(0)}
              </div>
              <span className="text-gray-700 font-medium">{post.author}</span>
            </div>
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-purple-600 font-medium transition-colors duration-300"
            >
              Читати далі
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

interface BlogGridProps {
  posts: BlogPost[];
  className?: string;
}

export default function BlogGrid({ posts, className = "" }: BlogGridProps) {
  return (
    <div className={`grid gap-8 ${className}`}>
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
