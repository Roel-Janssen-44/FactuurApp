'use client';

import {
  HomeIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  // {
  //   name: 'Invoices',
  //   href: '/dashboard/invoices',
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Tasks', href: '/dashboard/tasks', icon: ClipboardDocumentListIcon },
  { name: 'Goals', href: '/dashboard/goals', icon: ClipboardDocumentCheckIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        if (index + 1 < links.length) {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium dark:hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-active hover:bg-active dark:bg-active text-white hover:text-white dark:text-white':
                    pathname === link.href,
                },
                {
                  'dark:hover:bg-active dark:bg-secondary bg-gray-50 hover:bg-gray-200':
                    pathname !== link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        } else {
          return (
            <>
              <div className="dark:bg-secondary hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium dark:hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-active hover:bg-active dark:bg-active text-white hover:text-white dark:text-white':
                      pathname === link.href,
                  },
                  {
                    'dark:hover:bg-active dark:bg-secondary bg-gray-50 hover:bg-gray-200':
                      pathname !== link.href,
                  },
                )}
              >
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            </>
          );
        }
      })}
      {/* 
import ThemeSwitcher from '@/app/components/themeSwitcher';
      
      <div
        className={clsx(
          'dark:bg-secondary hover:text-active dark:hover:bg-active md:px-3s flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 dark:hover:text-white md:flex-none md:justify-start md:p-2',
        )}
      >
        <ThemeSwitcher />
      </div> */}
    </>
  );
}
