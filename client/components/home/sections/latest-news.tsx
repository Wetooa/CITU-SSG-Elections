"use client";

import { useEffect, useState } from "react";
import { fadeUp } from "@/utils/animations";
import { faNewspaper, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface FacebookPost {
  id: string;
  message: string;
  full_picture: string;
  created_time: string;
  permalink_url: string;
}

export interface FacebookPaging {
  cursors: {
    before: string;
    after: string;
  };
}

export interface FacebookResponse {
  data: FacebookPost[];
  paging: FacebookPaging;
}

export default function LatestNewsSection() {
  const token = process.env.NEXT_PUBLIC_META_ACCESS_TOKEN;
  const [data, setData] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://graph.facebook.com/v22.0/135692831771/feed?fields=id,message,full_picture,created_time,permalink_url&limit=5&access_token=${token}`,
        );

        const data: FacebookResponse = await res.json();

        if (data.data) {
          setData(data.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return (
    <motion.section
      className="border rounded-lg p-4 relative overflow-hidden"
      variants={fadeUp}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(42.78deg, #18181B 25.42%, #FF6969 472.21%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-lg font-medium">
            <FontAwesomeIcon icon={faNewspaper} className="text-[#FF6969]" />
            Latest News
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-pulse w-8 h-8 rounded-full bg-[#FF6969]/30"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {data.length > 0 ? (
              data.map((post) => <NewsCard key={post.id} post={post} />)
            ) : (
              <div className="text-center py-6 text-gray-400">
                No news available at the moment
              </div>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
}

const NewsCard = ({ post }: { post: FacebookPost }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const parseMessage = (message: string) => {
    let title = message;
    let description = "";

    if (message.length <= 50) {
      return { title, description };
    }

    const sentenceBreaks = [". ", "! ", "? ", ".\n", "!\n", "?\n"];
    let breakIndex = -1;

    for (const breakChar of sentenceBreaks) {
      const index = message.indexOf(breakChar, 30);
      if (index > 0 && index < 100) {
        breakIndex = index + breakChar.length - 1;
        break;
      }
    }

    if (breakIndex === -1) {
      const afterTitlePortion = message.substring(50);
      const capitalWordMatch = afterTitlePortion.match(/[.!?]\s+([A-Z][a-z]+)/);

      if (capitalWordMatch && capitalWordMatch.index !== undefined) {
        breakIndex = 50 + capitalWordMatch.index + 1;
      } else {
        const spaceAfter50 = message.indexOf(" ", 50);
        breakIndex =
          spaceAfter50 > 0 ? spaceAfter50 : Math.min(50, message.length);
      }
    }

    title = message.substring(0, breakIndex + 1).trim();

    if (/[.!?]\s$/.test(title)) {
      title = title.substring(0, title.length - 1);
    }

    if (breakIndex + 1 < message.length) {
      description = message.substring(breakIndex + 1).trim();
    }

    return { title, description };
  };

  const { title, description } = parseMessage(post.message);

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0 w-full sm:w-32 h-32 overflow-hidden rounded-lg">
        <Image
          src={post.full_picture || "/logos/technologian-logo.jpg"}
          alt="News thumbnail"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          width={500}
          height={500}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/logos/technologian-logo.jpg";
          }}
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <div>
          <Link
            href={post.permalink_url}
            className="text-base font-medium leading-tight line-clamp-2 hover:text-[#FF6969] transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </Link>

          {description && (
            <p className="text-sm text-gray-400 mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
          <FontAwesomeIcon icon={faCalendar} className="h-3 w-3" />
          {formatDate(post.created_time)}
        </div>
      </div>
    </motion.div>
  );
};
