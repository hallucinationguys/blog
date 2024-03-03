import Link from 'next/link'
import { PostMetadata } from './PostMetadata'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PostReview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <Card
        className="border-2 border-slate-300 rounded-md shadow-sm bg-white 
        dark:bg-dark-300 dark:border-transparent
        transition ease-in-out delay-50 
        hover:-translate-y-4 hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none 
        duration-150 drop-shadow-xl min-h-full "
      >
        <CardHeader>
          <CardTitle className=" text-pink-700 hover:underline mb-2 dark:text-pink-700">
            {props.slug.replaceAll('-', ' ')}
          </CardTitle>
          <CardDescription className="text-slate-700 dark:text-gray-200 italic font-bold">
            description: {props.subtitle}
          </CardDescription>
          <CardDescription className="text-slate-700 dark:text-gray-200 ">
            author: {props.author}
          </CardDescription>
          <CardDescription className="text-sm text-slate-400 dark:text-gray-200 ">
            {props.date}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default PostReview
