import getPostMetadata from '@/types/getPostMetadata'
import PostReview from '@/types/PostReview'

export default function Home() {
  const postPostMetadata = getPostMetadata()
  const postPreviews = postPostMetadata.map((post) => (
    <PostReview key={post.slug} {...post} />
  ))

  return (
    <main>
      <div className="flex justify-center items-center min-h-[calc(100vh-15rem)]">
        <div className="w-1/2 h-fit grid auto-rows-fr grid-cols-2 gap-8 ">
          {postPreviews}
        </div>
      </div>
    </main>
  )
}
