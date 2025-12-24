'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GateForm from '@/components/shared/GateForm';
import { isAccessGranted } from '@/lib/gate';

export default function GatePage() {
  const router = useRouter();

  useEffect(() => {
    // 如果已经登录，重定向到首页
    if (isAccessGranted()) {
      router.push('/');
    }
  }, [router]);

  return <GateForm />;
}

