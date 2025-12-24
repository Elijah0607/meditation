'use client';

import EventList, { Event } from '@/components/events/EventList';

// 示例数据 - 后续可以从 Supabase 获取
const events: Event[] = [
  {
    id: '1',
    title: '讀書會直播：電馭寫作',
    description: '本週我們將討論《電馭寫作》這本書，探討如何建立高價值社群。',
    date: '2025-01-15',
    time: '20:00',
    type: '直播',
    rsvpUrl: 'https://line.me/ti/g/example',
    isRSVPed: false,
    attendees: 12,
  },
  {
    id: '2',
    title: '再會咖啡 (1對1)',
    description: '一對一的深度交流，分享彼此的想法與經驗。',
    date: '2025-01-20',
    time: '14:00',
    location: '台北市信義區',
    type: '1對1',
    rsvpUrl: 'https://line.me/ti/g/example',
    isRSVPed: true,
    attendees: 5,
  },
  {
    id: '3',
    title: '新飯線下 Meetup',
    description: '線下聚會，與其他成員面對面交流。',
    date: '2025-01-25',
    time: '19:00',
    location: '台北市大安區',
    type: 'Meetup',
    rsvpUrl: 'https://line.me/ti/g/example',
    isRSVPed: false,
    attendees: 8,
  },
];

export default function EventsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">活動</h1>
        <p className="mt-2 text-muted-foreground">查看即將到來的活動並報名參加</p>
      </div>
      <EventList events={events} />
    </>
  );
}

