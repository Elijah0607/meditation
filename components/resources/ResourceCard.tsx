import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, Headphones, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  type: 'audio' | 'article' | 'video';
  duration?: string;
  url?: string;
  tags?: string[];
}

const typeIcons = {
  audio: Headphones,
  article: FileText,
  video: Play,
};

const typeLabels = {
  audio: '音檔',
  article: '文章',
  video: '影片',
};

export default function ResourceCard({
  title,
  description,
  type,
  duration,
  url,
  tags = [],
}: ResourceCardProps) {
  const Icon = typeIcons[type];

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <Badge variant="secondary">{typeLabels[type]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        {duration && (
          <p className="text-xs text-muted-foreground">時長：{duration}</p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {url && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            開啟
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

