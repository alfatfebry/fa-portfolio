import Link from 'next/link';
import { navItem } from '@/lib/navigation';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-foreground/10'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4'>
        {/* Kolom 1: brand + ikon sosial */}
        <div>
          <p className='text-xl font-bold'>{siteConfig.name}</p>
          <p className='mt-3 text-sm text-foreground/60'>
            {siteConfig.tagline}
          </p>

          <ul className='mt-5 flex gap-3'>
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full border border-foreground/20 px-3 py-1 text-xs font-semibold text-foreground/70 transition-colors hover:text-accent'
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 2: Explore */}
        <div>
          <h3 className='font-semibold'>Explore</h3>
          <ul className='mt-4 flex flex-col gap-2'>
            {navItem.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='text-sm text-foreground/60 transition-colors hover:text-accent'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Address */}
        <div>
          <h3 className='font-semibold'>Address</h3>
          <div className='mt-4 flex flex-col gap-1 text-sm text-foreground/60'>
            <p>{siteConfig.address.city}</p>
            {siteConfig.address.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        {/* Kolom 4: Say Hello */}
        <div>
          <h3 className='font-semibold'>Say Hello</h3>
          <div className='mt-4 flex flex-col gap-1 text-sm text-foreground/60'>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className='transition-colors hover:text-accent'
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className='transition-colors hover:text-accent'
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Baris hak cipta */}
      <div className='border-t border-foreground/10'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm text-foreground/60 text-center'>
          © {year} {siteConfig.owner}, All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
