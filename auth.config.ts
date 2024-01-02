import type { NextAuthConfig } from 'next-auth';
// visit the following url to learn more about this NextAuth.Js
// https://nextjs.org/learn/dashboard-app/adding-authentication#nextauthjs

export const authConfig = {
    pages: {
        signIn: '/login', // specifies the
    },
    callbacks: {
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
        }
    },
    providers: [],
} satisfies NextAuthConfig;
