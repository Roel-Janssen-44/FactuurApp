'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Label } from '@/app/components/chadcn/label';
import { Switch } from '@/app/components/chadcn/switch';

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        onCheckedChange={(value) => {
          if (value) {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
        id="airplane-mode"
      />
      <Label htmlFor="airplane-mode">Theme</Label>
    </div>
  );
}
