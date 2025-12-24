'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { setAccessGranted } from '@/lib/gate';

const ACCESS_CODE = (process.env.NEXT_PUBLIC_ACCESS_CODE || '1984').toUpperCase();
const LINE_GROUP_URL = process.env.NEXT_PUBLIC_LINE_GROUP_URL || '#';

export default function GateForm() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    // 模拟验证延迟
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (code.toUpperCase() === ACCESS_CODE) {
      setAccessGranted();
      router.push('/');
    } else {
      setError(true);
      setCode('');
      setIsLoading(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleGetCode = () => {
    window.open(LINE_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">大腦降噪</CardTitle>
          <CardDescription>請輸入通關密語以繼續</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                ref={inputRef}
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setError(false);
                }}
                placeholder="輸入通關密語"
                maxLength={10}
                className={error ? 'border-destructive' : ''}
                disabled={isLoading}
              />
              {error && (
                <p className="text-sm text-destructive">密語錯誤，請重新輸入</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? '驗證中...' : '驗證連接'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">或</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGetCode}
          >
            取得通關密語
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            加入「大腦降噪」實驗室，<br />
            在置頂公告領取本週密鑰。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

