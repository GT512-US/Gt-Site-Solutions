
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string })
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id and content
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string })
  }
}
