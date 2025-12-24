import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import RSVPButton from './RSVPButton';

interface EventCardProps {
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

export default function EventCard({
  id,
  title,
  description,
  date,
  time,
  location,
  type,
  coverImage,
  rsvpUrl,
  isRSVPed = false,
  attendees,
}: EventCardProps) {
  return (
    <Card className="mb-6 overflow-hidden">
      {coverImage && (
        <div className="relative h-56 w-full overflow-hidden bg-muted">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="mb-3">
              <Badge variant="secondary" className="mb-2">{type}</Badge>
            </div>
            <h3 className="h3 mb-3">{title}</h3>
            <p className="body text-secondary-text leading-relaxed">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span className="body-small">{date}</span>
            {time && <span className="body-small">· {time}</span>}
          </div>
          {location && (
            <div className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="body-small">{location}</span>
            </div>
          )}
          {attendees !== undefined && (
            <div className="flex items-center gap-2 text-muted">
              <Users className="h-4 w-4 flex-shrink-0" />
              <span className="body-small">{attendees} 人已報名</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <RSVPButton
          eventId={id}
          rsvpUrl={rsvpUrl}
          isRSVPed={isRSVPed}
        />
      </CardFooter>
    </Card>
  );
}

