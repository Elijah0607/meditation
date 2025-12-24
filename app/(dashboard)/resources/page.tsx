'use client';

import ResourceGrid, { Resource } from '@/components/resources/ResourceGrid';
import PageTransition from '@/components/shared/PageTransition';

// 示例数据 - 后续可以从 Supabase 获取
const resources: Resource[] = [
  {
    id: '1',
    title: '10分鐘冥想引導',
    description: '適合初學者的冥想引導音檔，幫助你放鬆身心，減少大腦雜訊。',
    type: 'audio',
    duration: '10:00',
    url: 'https://example.com/meditation-1',
    tags: ['冥想', '初學者', '放鬆'],
  },
  {
    id: '2',
    title: '深度呼吸練習',
    description: '透過深度呼吸練習，提升專注力與內在平靜。',
    type: 'audio',
    duration: '15:00',
    url: 'https://example.com/breathing-1',
    tags: ['呼吸', '專注力'],
  },
  {
    id: '3',
    title: '如何建立高價值社群',
    description: '探討社群經營的核心原則與實務經驗分享。',
    type: 'article',
    url: 'https://example.com/article-1',
    tags: ['社群', '經營'],
  },
  {
    id: '4',
    title: '冥想基礎教學',
    description: '完整的冥想基礎教學影片，從入門到進階。',
    type: 'video',
    duration: '30:00',
    url: 'https://example.com/video-1',
    tags: ['教學', '基礎'],
  },
];

export default function ResourcesPage() {
  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="h1">資源庫</h1>
        <p className="mt-2 body-small text-muted-foreground">冥想音檔、引導文章與其他資源</p>
      </div>
      <ResourceGrid resources={resources} />
    </PageTransition>
  );
}

