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
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      {coverImage && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <img
            src={coverImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="secondary">{type}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
            {time && <span>· {time}</span>}
          </div>
          {location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
          {attendees !== undefined && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{attendees} 人已報名</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <RSVPButton
          eventId={id}
          rsvpUrl={rsvpUrl}
          isRSVPed={isRSVPed}
        />
      </CardFooter>
    </Card>
  );
}

