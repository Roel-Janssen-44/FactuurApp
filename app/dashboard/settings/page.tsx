import ThemeSwitcher from '@/app/components/themeSwitcher';
import { exo } from '@/app/components/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function Settings() {
  return (
    <>
      <h1 className={`${exo.className} mb-4 text-3xl font-bold`}>Settings</h1>
      <div className="dark:bg-secondary hover:text-active dark:hover:bg-active md:px-3s flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 dark:hover:text-white md:flex-none md:justify-start md:p-2">
        <ThemeSwitcher />
      </div>
    </>
  );
}
