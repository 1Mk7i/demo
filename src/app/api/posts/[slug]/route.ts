import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

interface Post {
  title: string;
  author: string;
  date: string;
  content: string;
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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const postsDir = join(process.cwd(), 'src/data/posts');
    const filePath = join(postsDir, `${slug}.xml`);
    const xmlContent = readFileSync(filePath, 'utf8');
    const post = parseXMLPost(xmlContent);
    
    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error reading post:`, error);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
