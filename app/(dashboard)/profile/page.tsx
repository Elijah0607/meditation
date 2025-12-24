'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">個人資料</h1>
        <p className="mt-2 text-muted-foreground">管理你的帳戶設定</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>基本資訊</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">用</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">會員</p>
                <p className="text-sm text-muted-foreground">Member</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium">會員狀態</p>
                <p className="text-sm text-muted-foreground">已驗證</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

