'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './index';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //lazy initializere: React memanggil make store Sekali saja, saat renter pertama.
  // kita hanya mengambil nilai pertama, setter-nya tidak dipakai.
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
