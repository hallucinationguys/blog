import * as fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import getPostMetadata from '@/types/getPostMetadata'

const getPostContent = (slug: string): GrayMatterFile<string> => {
  const folder = 'articles/'
  const file = `${folder}${decodeURI(slug)}.md`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const PostPage = (props: any) => {
  const post = getPostContent(props?.params?.slug)

  return (
    <>
      <header>
        <title>{unescape(props.params.slug)}</title>
      </header>
      <div className="w-full flex justify-center items-center px-4 text-pretty ">
        <div className="w-auto tablet:w-1/2 desktop:w-1/3 flex flex-col justify-center items-center my-8">
          <h1 className="font-extrabold items-start text-3xl mb-4">
            {unescape(props.params.slug)}
          </h1>
          <article className="prose max-w-none">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </div>
    </>
  )
}

export default PostPage
