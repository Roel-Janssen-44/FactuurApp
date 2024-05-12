import { exo } from '@/app/components/fonts';
import Link from 'next/link';

export default function Navbar() {
  return (
    <footer className="flex w-full flex-row justify-center gap-8 bg-gray-200 py-4">
      <Link
        href="/privacy"
        className="rounded-lg p-2 px-3 text-sm text-tertiary underline transition-colors hover:text-active"
      >
        Privacy policy
      </Link>
      <Link
        href={'/terms'}
        className="rounded-lg p-2 px-3 text-sm text-tertiary underline transition-colors hover:text-active"
      >
        <p>Terms of service</p>
      </Link>
    </footer>
  );
}
