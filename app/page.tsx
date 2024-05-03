// import AcmeLogo from '@/app/components/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { exo } from '@/app/components/fonts';
import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import { Metadata } from 'next';
import Hero from '@/app/components/hero';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
