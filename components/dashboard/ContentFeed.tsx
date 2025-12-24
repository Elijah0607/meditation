'use client';

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
          {pinnedAnnouncements.map((item) => (
            <AnnouncementCard
              key={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
              isPinned={item.isPinned}
            />
          ))}
        </div>
      )}

      {/* 内容流 */}
      <div className="space-y-4">
        {regularContent.map((item) => {
          if (item.type === 'announcement') {
            return (
              <AnnouncementCard
                key={item.id}
                title={item.title}
                content={item.content}
                date={item.date}
                isPinned={item.isPinned}
              />
            );
          }
          return (
            <FeedCard
              key={item.id}
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
          );
        })}
      </div>
    </div>
  );
}

