'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAccessGranted } from '@/lib/gate';
import Sidebar from '@/components/layout/Sidebar';
import MainContent from '@/components/layout/MainContent';
import RightSidebar from '@/components/layout/RightSidebar';
import ContentFeed from '@/components/dashboard/ContentFeed';
import FeedFilters from '@/components/dashboard/FeedFilters';
import PageTransition from '@/components/shared/PageTransition';
import { LoadingPage } from '@/components/ui/loading';

// 示例数据
const feedItems = [
  {
    id: '1',
    type: 'announcement' as const,
    title: '本週公告',
    content: '歡迎來到「大腦降噪」社群！本週我們將舉辦讀書會直播，請記得 RSVP 並全程參與。',
    author: '阿法',
    date: '2025-01-10',
    isPinned: true,
  },
  {
    id: '2',
    type: 'article' as const,
    title: '如何建立高價值社群？',
    content: '社群的核心不在於人數，而在於價值。我們需要思考如何為成員創造真正的價值，而不是單純的資訊堆疊。',
    author: '阿法',
    date: '2025-01-09',
    likes: 12,
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: '3',
    type: 'article' as const,
    title: '冥想與專注力',
    content: '透過每日的冥想練習，我們可以提升專注力，減少大腦的雜訊，讓思緒更加清晰。',
    author: '阿法',
    date: '2025-01-08',
    likes: 8,
    isLiked: true,
    isBookmarked: false,
  },
];

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    if (!isAccessGranted()) {
      router.push('/gate');
    }
  }, [router]);

  if (!isAccessGranted()) {
    return <LoadingPage />;
  }

  // 筛选逻辑
  const filteredItems = feedItems.filter((item) => {
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MainContent>
        <PageTransition>
          <div>
            <div className="mb-8">
              <h1 className="h1">Feed</h1>
              <p className="mt-2 body-small text-muted-foreground">最新內容與動態</p>
            </div>
            <FeedFilters
              onSearch={setSearchQuery}
              onFilter={setActiveFilter}
              activeFilter={activeFilter}
            />
            <ContentFeed items={filteredItems} />
          </div>
        </PageTransition>
      </MainContent>
      <RightSidebar />
    </div>
  );
}
