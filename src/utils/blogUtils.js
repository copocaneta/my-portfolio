import frontMatter from 'front-matter'
import { marked } from 'marked'

// todo: maybe add redis cache for prod environment
let cachedPosts = null

async function loadPosts() {
  // todo: maybe move posts to cms like strapi or contentful later
  // todo: add tags/categories to posts for better filtering
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
  
  // todo: add error boundary component to handle failed post loads better
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
  
  // todo: add more sort options (by title, tags etc)
  const sortedPosts = processedPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  if (import.meta.env.PROD) {
    cachedPosts = sortedPosts
  }
  
  return sortedPosts
}

// todo: maybe add syntax highlighting for code blocks
export function parseMarkdown(content) {
  return marked(content)
} 