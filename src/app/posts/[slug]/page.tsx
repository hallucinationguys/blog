import * as fs from 'fs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import matter, { GrayMatterFile } from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import getPostMetadata from '@/types/getPostMetadata'

function code({ className, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      PreTag="div"
      codeTagProps={{
        style: {
          color: 'white',
        },
      }}
      customStyle={{
        backgroundColor: 'transparent',
        opacity: '1',
      }}
      language={match[1]}
      style={tomorrow}
      wrapLongLines
      {...props}
    />
  ) : (
    <code className={className} {...props} />
  )
}

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
      <div className=" w-full flex flex-col justify-center items-center p-4 mt-4">
        <h1 className="font-extrabold items-start text-3xl mb-4">
          {unescape(props.params.slug)}
        </h1>
        <article className="prose md:prose-md lg:prose-lg prose-stone text-pretty w-full ">
          <MDXRemote components={{ code }} source={post.content} />
        </article>
      </div>
    </>
  )
}

export default PostPage
