'use client';

import { motion } from 'framer-motion';
import FeedCard from './FeedCard';
import AnnouncementCard from './AnnouncementCard';

interface ContentItem {
  id: string;
  type: 'announcement' | 'article' | 'video' | 'audio';
  title: string;
  content: string;
  author: string;
  date: string;
  likes?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  isPinned?: boolean;
}

interface ContentFeedProps {
  items: ContentItem[];
}

export default function ContentFeed({ items }: ContentFeedProps) {
  // 分离置顶公告和其他内容
  const pinnedAnnouncements = items.filter(
    (item) => item.type === 'announcement' && item.isPinned
  );
  const regularContent = items.filter(
    (item) => item.type !== 'announcement' || !item.isPinned
  );

  return (
    <div className="space-y-6">
      {/* 置顶公告 */}
      {pinnedAnnouncements.length > 0 && (
        <div className="space-y-4">
          {pinnedAnnouncements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
              <AnnouncementCard
                title={item.title}
                content={item.content}
                date={item.date}
                isPinned={item.isPinned}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* 内容流 */}
      <div className="space-y-4">
        {regularContent.map((item, index) => {
          if (item.type === 'announcement') {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: (pinnedAnnouncements.length + index) * 0.05,
                  ease: 'easeOut',
                }}
              >
                <AnnouncementCard
                  title={item.title}
                  content={item.content}
                  date={item.date}
                  isPinned={item.isPinned}
                />
              </motion.div>
            );
          }
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: (pinnedAnnouncements.length + index) * 0.05,
                ease: 'easeOut',
              }}
            >
              <FeedCard
                id={item.id}
                title={item.title}
                content={item.content}
                author={item.author}
                date={item.date}
                type={item.type as 'article' | 'video' | 'audio'}
                likes={item.likes}
                isLiked={item.isLiked}
                isBookmarked={item.isBookmarked}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

