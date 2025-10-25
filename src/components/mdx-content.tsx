
import { MDXRemote } from 'next-mdx-remote/rsc'

export function MdxContent({ content }: { content: string }) {
  return <MDXRemote source={content} />
}
