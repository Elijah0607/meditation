'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Bell } from 'lucide-react';

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  type: string;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
}

const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    title: '讀書會直播',
    date: '2025-01-15',
    type: '直播',
  },
  {
    id: '2',
    title: '再會咖啡',
    date: '2025-01-20',
    type: 'Meetup',
  },
];

const announcements: Announcement[] = [
  {
    id: '1',
    title: '本週公告',
    date: '2025-01-10',
  },
];

export default function RightSidebar() {
  return (
    <div className="hidden w-80 border-l bg-secondary-bg lg:block">
      <div className="sticky top-0 space-y-6 p-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 h5">
              <Calendar className="h-4 w-4" />
              即將到來的活動
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg border bg-card p-3 transition-colors hover:bg-accent"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="body-small font-medium">{event.title}</p>
                    <p className="caption text-muted-foreground">{event.date}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {event.type}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 h5">
              <Bell className="h-4 w-4" />
              社群公告
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="rounded-lg border bg-card p-3 transition-colors hover:bg-accent"
              >
                <p className="body-small font-medium">{announcement.title}</p>
                <p className="caption text-muted-foreground">{announcement.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

