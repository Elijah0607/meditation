import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Megaphone } from 'lucide-react';

interface AnnouncementCardProps {
  title: string;
  content: string;
  date: string;
  isPinned?: boolean;
}

export default function AnnouncementCard({
  title,
  content,
  date,
  isPinned = false,
}: AnnouncementCardProps) {
  return (
    <Card className="mb-6 border-primary/20 bg-primary/5 card-shadow-elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 h4">
            <Megaphone className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
          {isPinned && (
            <Badge variant="default" className="text-xs">
              置頂
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="body text-muted-foreground leading-relaxed">{content}</p>
        <p className="mt-4 caption text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  );
}

