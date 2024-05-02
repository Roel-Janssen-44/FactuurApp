export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$|manifest\\.json).*)'], // Add 'manifest\\.json' to exclude manifest file
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$|manifest\\.json|.*\\.svg$|^/public/).*)',
  ],
};

import authConfig from './auth.config';
import NextAuth from 'next-auth';
export const { auth: middleware } = NextAuth(authConfig);
