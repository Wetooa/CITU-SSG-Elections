'use client'

import { useEffect, useState } from 'react'
import { fadeUp } from '@/utils/animations'
import { faNewspaper, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export interface FacebookPost {
  id: string
  message: string
  full_picture: string
  created_time: string
  permalink_url: string
}

export interface FacebookPaging {
  cursors: {
    before: string
    after: string
  }
}

export interface FacebookResponse {
  data: FacebookPost[]
  paging: FacebookPaging
}

export default function LatestNewsSection() {
  const token = process.env.NEXT_PUBLIC_META_ACCESS_TOKEN
  const [data, setData] = useState<FacebookPost[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://graph.facebook.com/v22.0/135692831771/feed?fields=id,message,full_picture,created_time,permalink_url&limit=5&access_token=${token}`
      )

      const data: FacebookResponse = await res.json()

      if (data.data) {
        setData(data.data)
        console.log(data)
      }
    }

    fetchData()
  }, [token])

  return (
    <motion.section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4" variants={fadeUp}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faNewspaper} />
        Latest News
      </div>

      <div className="space-y-4">
        {data.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </motion.section>
  )
}

const NewsCard = ({ post }: { post: FacebookPost }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="flex items-center text-white p-4 rounded-lg max-w-2xl">
      <div className="flex-shrink-0 w-36 h-36 overflow-hidden rounded-lg">
        <Image
          src={post.full_picture}
          alt="News thumbnail"
          className="w-full h-full object-cover"
          width={144}
          height={144}
        />
      </div>

      <div className="ml-4 flex flex-col justify-center">
        <Link href={post.permalink_url} className="text-lg  leading-tight line-clamp-2 underline">
          {post.message}
        </Link>

        <div className="flex items-center gap-2 text-sm text-white mt-2">
          <FontAwesomeIcon icon={faCalendar} />
          {formatDate(post.created_time)}
        </div>
      </div>
    </div>
  )
}
