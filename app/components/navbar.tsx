import ThemeSwitcher from '@/app/components/themeSwitcher';
import { exo } from '@/app/components/fonts';
import { Button } from './button';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="container fixed left-0 top-0 flex h-14 w-full flex-row items-center justify-between bg-white text-primary shadow-sm">
      <Link
        href="/"
        className="rounded-lg p-2 px-3 transition-colors hover:bg-gray-100"
      >
        <div className="flex flex-row items-center justify-start gap-0">
          <Image
            src={'/logo_klein_kleur.svg'}
            width={32}
            height={32}
            alt="Logo ListTrackr"
          />
          <span className={`${exo.className} text-2xl font-bold`}>
            ListTrackr
          </span>
        </div>
      </Link>
      <div className="flex flex-row gap-4">
        <ThemeSwitcher />
        <Link
          href={'/login'}
          className={
            'flex grow items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-active dark:hover:text-white md:flex-none md:justify-start'
          }
        >
          <p>Log in</p>
        </Link>
      </div>
    </header>
  );
}
