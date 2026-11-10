import Link from 'next/link';
import { navItem } from '@/lib/navigation';

export default function Navbar() {
  return (
    <header className='border-b border-white/10'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <Link href='/' className='text-xl font-bold'>
          kangfeb.
        </Link>

        <ul className='flex gap-8'>
          {navItem.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
