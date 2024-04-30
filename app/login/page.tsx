import AcmeLogo from '@/app/components/acme-logo';
import LoginForm from '@/app/components/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

import { signIn } from 'auth';
import { Button } from '@/app/components/button';

import Image from 'next/image';

export default async function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />

        <form
          action={async () => {
            'use server';
            await signIn('github');
          }}
        >
          <Button type="submit" className="flex flex-row justify-between gap-4">
            <Image
              src="/github-mark-white.png"
              width={24}
              height={24}
              alt="github logo"
            />
            Signin with Github
          </Button>
        </form>
      </div>
    </main>
  );
}
