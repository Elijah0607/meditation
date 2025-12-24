'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface RSVPButtonProps {
  eventId: string;
  rsvpUrl?: string;
  isRSVPed?: boolean;
  onRSVP?: () => void;
}

export default function RSVPButton({
  eventId,
  rsvpUrl,
  isRSVPed = false,
  onRSVP,
}: RSVPButtonProps) {
  const handleClick = () => {
    if (rsvpUrl) {
      window.open(rsvpUrl, '_blank', 'noopener,noreferrer');
    } else if (onRSVP) {
      onRSVP();
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={isRSVPed ? 'secondary' : 'default'}
      className="w-full button-shadow"
      size="lg"
    >
      <Calendar className="mr-2 h-4 w-4" />
      {isRSVPed ? '已報名' : '報名參加'}
    </Button>
  );
}

