'use client';

import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';

import { lusitana } from '@/app/components/fonts';

export default function DashboardMessage() {
  const { data: session, status } = useSession();

  //   console.log(session);
  if (status === 'authenticated') {
    return (
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Welcom back, <br />
        {session.user.name}
      </h1>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;

  return (
    // <SessionProvider session={session}>
    <div>
      <p>Dashboard message</p>
    </div>
    // </SessionProvider>
  );
}
