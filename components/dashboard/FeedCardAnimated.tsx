'use client';

import { motion } from 'framer-motion';
import FeedCard from './FeedCard';

interface FeedCardAnimatedProps {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  type?: 'article' | 'video' | 'audio';
  likes?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
  index: number;
}

export default function FeedCardAnimated(props: FeedCardAnimatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: props.index * 0.05,
        ease: 'easeOut',
      }}
    >
      <FeedCard {...props} />
    </motion.div>
  );
}

