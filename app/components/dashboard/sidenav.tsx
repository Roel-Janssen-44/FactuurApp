import Link from 'next/link';
import NavLinks from '@/app/components/dashboard/nav-links';
import { Cog6ToothIcon, PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="bg-active dark:bg-active mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h-40"
        href="/"
      >
        <Image
          src={'/logo_wit.svg'}
          width={150}
          height={200}
          alt="Logo ListTrackr"
        />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />

        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          {/* <button className="dark:bg-secondary dark:hover:bg-active mb-2 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-200 md:flex-none md:justify-start md:p-2 md:px-3">
            <Cog6ToothIcon className="w-6" />
            <div className="hidden md:block">Settings</div>
          </button> */}
          <button className="dark:bg-secondary dark:hover:bg-active flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-200 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
