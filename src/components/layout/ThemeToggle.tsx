'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  const isDark = mode === 'dark';

  const handleClick = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    dispatch(toggleTheme());
    localStorage.setItem('theme', nextMode);
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className='cursor-pointer flex items-center gap-1 rounded-full border border-foreground/20 p-1'
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isDark ? 'text-foreground' : 'bg-foreground text-background/60'}`}
      >
        <Sun size={16} />
      </span>

      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isDark ? 'bg-foreground text-background/60' : 'text-background/60'}`}
      >
        <Moon size={16} />
      </span>
    </button>
  );
}
