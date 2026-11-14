'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setTheme } from '@/store/slices/themeSlice';

export default function ThemeSync() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispath = useAppDispatch();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      dispath(setTheme(saved));
    }
  }, [dispath]);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  return null;
}
