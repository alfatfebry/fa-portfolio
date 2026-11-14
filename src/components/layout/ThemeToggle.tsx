'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleTheme } from '@/store/slices/themeSlice';

export default function ThemeToggle() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    dispatch(toggleTheme());
    localStorage.setItem('theme', nextMode);
  };

  return (
    <button
      type='button'
      className='cursor-pointer border-foreground/20 text-foreground'
      onClick={handleClick}
    >
      {mode === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
