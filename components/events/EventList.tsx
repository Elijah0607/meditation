'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import EventCard from './EventCard';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  type: '直播' | 'Meetup' | '1對1';
  coverImage?: string;
  rsvpUrl?: string;
  isRSVPed?: boolean;
  attendees?: number;
}

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const now = new Date();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    if (filter === 'upcoming') {
      return eventDate >= now;
    }
    if (filter === 'past') {
      return eventDate < now;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList>
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="upcoming">即將到來</TabsTrigger>
          <TabsTrigger value="past">已結束</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            目前沒有活動
          </div>
        )}
      </div>
    </div>
  );
}

