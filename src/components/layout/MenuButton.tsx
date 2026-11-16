'use client';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleMenu } from '@/store/slices/uiSlice';
import { Menu, X } from 'lucide-react';

export default function MenuButton() {
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);
  const dispatch = useAppDispatch();

  return (
    <button
      type='button'
      onClick={() => dispatch(toggleMenu())}
      aria-label="{isMenuOpen ? 'Close Menu' : 'Open Menu'}"
      aria-expanded={isMenuOpen}
      className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-foreground/20 md:hidden'
    >
      {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
    </button>
  );
}
