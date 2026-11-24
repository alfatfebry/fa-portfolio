'use client';

import { useState } from 'react';
import { services } from '../data';

export default function ServiceAccordion() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <ul className='divide-y divide-white/15'>
      {services.map((service, index) => {
        const isOpen = openId === service.id;

        return (
          <li key={service.id}>
            <button
              type='button'
              aria-expanded={isOpen}
              onClick={() => handleToggle(service.id)}
              className='flex w-full cursor-pointer items-center gap-6 py-5 text-left'
            >
              <span className='text-sm text-white/60'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='text-xl font-semibold md:text-2xl'>
                {service.title}
              </span>
            </button>

            {isOpen && (
              <div className='pb-6 pl-12 md:pl-14'>
                <p>{service.description}</p>
                <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-white/70'>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
