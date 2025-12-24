'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeedFiltersProps {
  onSearch?: (query: string) => void;
  onFilter?: (filter: string) => void;
  activeFilter?: string;
}

const filterOptions = [
  { id: 'all', label: '全部' },
  { id: 'article', label: '文章' },
  { id: 'video', label: '影片' },
  { id: 'audio', label: '音檔' },
];

export default function FeedFilters({ 
  onSearch, 
  onFilter, 
  activeFilter = 'all' 
}: FeedFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch?.('');
  };

  return (
    <div className="mb-8 space-y-4">
      {/* 搜索栏 */}
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="搜索內容..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 pr-9"
        />
        {searchQuery && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </form>

      {/* 筛选标签 */}
      <div className="flex flex-wrap items-center gap-2">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={activeFilter === option.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFilter?.(option.id)}
            className={cn(
              'h-8',
              activeFilter === option.id && 'button-shadow'
            )}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

