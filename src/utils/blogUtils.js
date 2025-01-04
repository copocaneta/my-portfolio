import frontMatter from 'front-matter'
import { marked } from 'marked'

// Cache the posts in production
let cachedPosts = null

export async function getAllPosts() {
  // Return cached posts in production
  if (cachedPosts && import.meta.env.PROD) {
    return cachedPosts
  }

  const posts = []
  
  // Log available modules
  const modules = import.meta.glob('../blog/posts/*.md', { 
    as: 'raw',
    eager: true
  })
  
  console.log('Available markdown files:', Object.keys(modules))
  
  for (const path in modules) {
    try {
      const content = modules[path]
      const { attributes, body } = frontMatter(content)
      
      posts.push({
        ...attributes,
        slug: path.replace('../blog/posts/', '').replace('.md', ''),
        excerpt: body.split('\n\n')[0],
        content: body
      })
    } catch (error) {
      console.error(`Error loading post from ${path}:`, error)
    }
  }
  
  console.log('Total posts found:', posts.length)
  
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  // Cache the posts in production
  if (import.meta.env.PROD) {
    cachedPosts = sortedPosts
  }
  
  return sortedPosts
}

export function parseMarkdown(content) {
  return marked(content)
} 