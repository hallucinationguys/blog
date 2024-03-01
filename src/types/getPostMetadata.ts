import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from './PostMetadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'articles/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`articles/${fileName}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      tags: matterResult.data.tags,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      date: matterResult.data.date.toString(),
      slug: fileName.replace('.md', ''),
    }
  })
  return posts
}

export default getPostMetadata
