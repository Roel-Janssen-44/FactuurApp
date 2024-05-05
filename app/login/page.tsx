// import { handlers } from 'auth';
// export const { GET, POST } = handlers;

import { Metadata } from 'next';
import { exo } from '@/app/components/fonts';
import Navbar from '@/app/components/navbar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
};

import { signIn } from 'auth';
import { Button } from '@/app/components/button';

import Image from 'next/image';

export default async function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="space-y-3">
            <div className="flex-1 rounded-lg bg-white px-6 pb-4 pt-8 dark:bg-primary">
              <Link href="/">
                <Image
                  src={'/logo_klein_kleur.svg'}
                  width={100}
                  height={100}
                  alt="Logo ListTrackr"
                  className="dark:hidden"
                />
                <Image
                  src={'/logo_klein_wit.svg'}
                  width={100}
                  height={100}
                  alt="Logo ListTrackr"
                  className="hidden dark:block"
                />
              </Link>
              <h1 className={`${exo.className} mb-3 mt-2 text-2xl font-bold`}>
                Please log in to continue.
              </h1>
            </div>
          </div>

          <form
            action={async () => {
              'use server';
              await signIn('github');
            }}
          >
            <Button
              type="submit"
              className="bg-tertiary hover:bg-tertiary flex flex-row justify-between gap-4 border-[1px] border-transparent hover:bg-opacity-70 dark:border-white"
            >
              <Image
                src="/github-mark-white.png"
                width={24}
                height={24}
                alt="GitHub logo"
              />
              Signin with Github
            </Button>
          </form>
          <form
            action={async () => {
              'use server';
              await signIn('google');
            }}
          >
            <Button
              type="submit"
              className="text-tertiary dark:text-tertiary flex flex-row justify-between gap-4 border-[1px] border-[#1f1f1f] bg-white hover:bg-gray-100"
            >
              <div className="h-6 w-6">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ display: 'block' }}
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className="text-tertiary">Signin with Google</span>
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
