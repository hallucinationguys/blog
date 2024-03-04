import getPostMetadata from '@/types/getPostMetadata'
import PostReview from '@/types/PostReview'

export default function Home() {
  const postPostMetadata = getPostMetadata()

  const postPreviews = postPostMetadata.map((post) => {
    return <PostReview key={post.slug} {...post} />
  })

  return (
    <main>
      <div className="flex flex-col w-full min-h-[calc(100vh-10rem)] justify-center items-center ">
        <div className="w-auto justify-center items-center laptop:w-2/3 grid grid-cols-1 laptop:grid-cols-2 gap-4 ">
          {postPreviews}
        </div>
      </div>
    </main>
  )
}
