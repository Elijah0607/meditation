import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Bookmark, Share2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

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
  const typeLabels = {
    article: '文章',
    video: '影片',
    audio: '音檔',
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="caption text-muted-foreground uppercase tracking-wide">{typeLabels[type]}</span>
            </div>
            <h3 className="h3 mb-3">{title}</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="caption text-xs">{author[0]}</AvatarFallback>
              </Avatar>
              <span className="body-small text-muted">{author}</span>
              <span className="text-muted">·</span>
              <span className="caption text-muted-foreground">{date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="body mb-6 text-secondary-text leading-relaxed">
          {content}
        </p>
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                'h-8',
                isLiked ? 'text-destructive hover:text-destructive' : ''
              )}
            >
              <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              <span className="ml-1.5 body-small">{likes}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                'h-8',
                isBookmarked ? 'text-primary hover:text-primary' : ''
              )}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="ghost" size="sm" className="h-8">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

