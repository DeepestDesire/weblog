import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      httpOptions: { timeout: 100000 },
    }),
    // ...add more providers here
  ],
};

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
