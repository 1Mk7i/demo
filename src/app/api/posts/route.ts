import { NextResponse } from 'next/server';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface Post {
  title: string;
  author: string;
  date: string;
  content: string;
}

interface PostWithSlug extends Post {
  slug: string;
}

function parseXMLPost(xmlContent: string): Post {
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

export async function GET(): Promise<NextResponse> {
  try {
    const postsDir = join(process.cwd(), 'src/data/posts');
    const files = readdirSync(postsDir);
    
    const posts: PostWithSlug[] = files
      .filter(file => file.endsWith('.xml'))
      .map(file => {
        const slug = file.replace('.xml', '');
        const xmlContent = readFileSync(join(postsDir, file), 'utf8');
        const post = parseXMLPost(xmlContent);
        return { ...post, slug };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error reading posts:', error);
    return NextResponse.json([], { status: 500 });
  }
}
