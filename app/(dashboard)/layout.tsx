'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAccessGranted } from '@/lib/gate';
import Sidebar from '@/components/layout/Sidebar';
import MainContent from '@/components/layout/MainContent';
import RightSidebar from '@/components/layout/RightSidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!isAccessGranted()) {
      router.push('/gate');
    }
  }, [router]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MainContent>{children}</MainContent>
      <RightSidebar />
    </div>
  );
}

