'use client';

import { useSession } from 'next-auth/react';

import { exo } from '@/app/components/fonts';

export default function DashboardMessage() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <h1
        className={`${exo.className} text-primary mb-4 text-xl font-bold md:text-3xl`}
      >
        Welcom back, <br />
        {session.user.name}
      </h1>
    );
  }
}
