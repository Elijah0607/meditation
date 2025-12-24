'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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

      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
              <EventCard {...event} />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="body text-muted-foreground">目前沒有活動</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

