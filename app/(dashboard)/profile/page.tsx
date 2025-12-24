'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import PageTransition from '@/components/shared/PageTransition';

export default function ProfilePage() {
  return (
    <PageTransition>
      <div className="mb-8">
        <h1 className="h1">個人資料</h1>
        <p className="mt-2 body-small text-muted-foreground">管理你的帳戶設定</p>
      </div>

      <div className="space-y-6">
        {/* 基本資訊卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="h4">基本資訊</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl">用</AvatarFallback>
              </Avatar>
              <div>
                <p className="h5 mb-1">會員</p>
                <p className="body-small text-muted-foreground">Member</p>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="body-small font-medium mb-1">會員狀態</p>
                <p className="body-small text-muted-foreground">已驗證</p>
              </div>
              <div>
                <p className="body-small font-medium mb-1">加入時間</p>
                <p className="body-small text-muted-foreground">2025-01-01</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 帳戶設定卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="h4">帳戶設定</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="body-small text-muted-foreground">
              帳戶設定功能即將推出
            </p>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}

