// import type { NextAuthConfig } from 'next-auth';
// import GitHub from 'next-auth/providers/github';
// import PostgresAdapter from '@auth/pg-adapter';
// import { Pool } from 'pg';

// const pool = new Pool({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });
// // const pool = new Pool({
// //   connectionString: process.env.POSTGRES_URL,
// // });

// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [GitHub], // Add providers with an empty array for now
//   adapter: PostgresAdapter(pool),
// } satisfies NextAuthConfig;

// import GitHub from 'next-auth/providers/github';
// import type { NextAuthConfig } from 'next-auth';

// export default { providers: [GitHub] } satisfies NextAuthConfig;

import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

import type { NextAuthConfig } from 'next-auth';

const config: NextAuthConfig = {
  providers: [GitHub, Google],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user?.id) token.id = user.id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token, user }: any) {
      // user id is stored in .id when using credentials provider
      if (token?.id) session.user.id = token.id;

      // user id is stored in .id when using google provider
      if (token?.sub) session.user.id = token.sub;

      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
};

export default config;
