'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, BookOpen, User, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { clearAccess } from '@/lib/gate';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    clearAccess();
    router.push('/gate');
  };

  return (
    <div className="flex h-screen w-64 flex-col border-r" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Logo */}
      <div className="flex h-16 items-center border-b bg-card px-6 card-shadow">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-semibold">大</span>
          </div>
          <span className="h5">大腦降噪</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 body-small font-medium transition-all',
                isActive
                  ? 'bg-card text-foreground card-shadow'
                  : 'text-muted-foreground hover:bg-card hover:text-foreground hover:shadow-sm'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <Separator />

      {/* User Section */}
      <div className="p-4 border-t bg-card">
        <div className="flex items-center gap-3 rounded-lg px-3 py-3 bg-background card-shadow">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="text-sm">用</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="body-small font-medium truncate">會員</p>
            <p className="caption text-muted-foreground">Member</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2 body-small text-muted-foreground transition-all hover:bg-background hover:text-foreground hover:shadow-sm"
        >
          <LogOut className="h-5 w-5" />
          登出
        </button>
      </div>
    </div>
  );
}

