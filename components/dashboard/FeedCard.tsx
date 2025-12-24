import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Bookmark, Share2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface FeedCardProps {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  type?: 'article' | 'video' | 'audio';
  likes?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export default function FeedCard({
  title,
  content,
  author,
  date,
  type = 'article',
  likes = 0,
  isLiked = false,
  isBookmarked = false,
}: FeedCardProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-2 flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">{author[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{author}</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {content}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className={isLiked ? 'text-destructive' : ''}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
            <span className="ml-1">{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className={isBookmarked ? 'text-primary' : ''}>
            <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

