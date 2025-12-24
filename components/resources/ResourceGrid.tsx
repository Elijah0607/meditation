'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ResourceCard from './ResourceCard';

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'audio' | 'article' | 'video';
  duration?: string;
  url?: string;
  tags?: string[];
}

interface ResourceGridProps {
  resources: Resource[];
}

export default function ResourceGrid({ resources }: ResourceGridProps) {
  const [filter, setFilter] = useState<'all' | 'audio' | 'article' | 'video'>('all');

  const filteredResources = resources.filter((resource) => {
    if (filter === 'all') return true;
    return resource.type === filter;
  });

  return (
    <div className="space-y-6">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList>
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="audio">音檔</TabsTrigger>
          <TabsTrigger value="article">文章</TabsTrigger>
          <TabsTrigger value="video">影片</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: 'easeOut',
              }}
            >
              <ResourceCard {...resource} />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-12 text-center text-muted-foreground"
          >
            <p className="body text-muted-foreground">目前沒有資源</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

