import { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
  className?: string;
}

export default function MainContent({ children, className }: MainContentProps) {
  return (
    <main className={className || 'flex-1 overflow-y-auto bg-background'}>
      <div className="mx-auto max-w-4xl px-6 py-8">
        {children}
      </div>
    </main>
  );
}

