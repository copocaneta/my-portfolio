import frontMatter from 'front-matter'
import { marked } from 'marked'

let cachedPosts = null

async function loadPosts() {
  const posts = [
    {
      path: '/src/blog/posts/01.md',
      content: (await import('@/blog/posts/01.md?raw')).default
    },
    {
      path: '/src/blog/posts/02.md',
      content: (await import('@/blog/posts/02.md?raw')).default
    },
    {
      path: '/src/blog/posts/03.md',
      content: (await import('@/blog/posts/03.md?raw')).default
    }
  ]
  return posts
}

export async function getAllPosts() {
  if (cachedPosts && import.meta.env.PROD) {
    return cachedPosts
  }

  const processedPosts = []
  const posts = await loadPosts()
  
  for (const { path, content } of posts) {
    try {
      const { attributes, body } = frontMatter(content)
      
      processedPosts.push({
        ...attributes,
        slug: path.replace('/src/blog/posts/', '').replace('.md', ''),
        excerpt: body.split('\n\n')[0],
        content: body
      })
    } catch (error) {
      console.error(`Error loading post from ${path}:`, error)
    }
  }
  
  const sortedPosts = processedPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  if (import.meta.env.PROD) {
    cachedPosts = sortedPosts
  }
  
  return sortedPosts
}

export function parseMarkdown(content) {
  return marked(content)
} 