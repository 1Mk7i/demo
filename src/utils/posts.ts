export interface Post {
  title: string;
  author: string;
  date: string;
  content: string;
}

export interface PostWithSlug extends Post {
  slug: string;
}

function parseXMLPost(xmlContent: string): Post {
  // Simple XML parsing - for production, consider using a proper XML parser
  const titleMatch = xmlContent.match(/<title>([\s\S]*?)<\/title>/);
  const authorMatch = xmlContent.match(/<author>([\s\S]*?)<\/author>/);
  const dateMatch = xmlContent.match(/<date>([\s\S]*?)<\/date>/);
  const contentMatch = xmlContent.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);

  if (!titleMatch || !authorMatch || !dateMatch || !contentMatch) {
    throw new Error('Invalid XML format');
  }

  return {
    title: titleMatch[1].trim(),
    author: authorMatch[1].trim(),
    date: dateMatch[1].trim(),
    content: contentMatch[1].trim()
  };
}

// Server-side only functions
export async function getPost(slug: string): Promise<Post | null> {
  if (typeof window !== 'undefined') {
    // Client-side: use API route
    try {
      const response = await fetch(`/api/posts/${slug}`);
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    }
  }

  // Server-side: direct file access
  try {
    const { readFileSync } = await import('fs');
    const { join } = await import('path');
    const postsDir = join(process.cwd(), 'src/data/posts');
    const filePath = join(postsDir, `${slug}.xml`);
    const xmlContent = readFileSync(filePath, 'utf8');
    return parseXMLPost(xmlContent);
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostWithSlug[]> {
  if (typeof window !== 'undefined') {
    // Client-side: use API route
    try {
      const response = await fetch('/api/posts');
      if (!response.ok) return [];
      return await response.json();
    } catch {
      return [];
    }
  }

  // Server-side: direct file access
  try {
    const { readFileSync, readdirSync } = await import('fs');
    const { join } = await import('path');
    const postsDir = join(process.cwd(), 'src/data/posts');
    const files = readdirSync(postsDir);
    
    return files
      .filter(file => file.endsWith('.xml'))
      .map(file => {
        const slug = file.replace('.xml', '');
        const xmlContent = readFileSync(join(postsDir, file), 'utf8');
        const post = parseXMLPost(xmlContent);
        return { ...post, slug };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map(post => post.slug);
}
