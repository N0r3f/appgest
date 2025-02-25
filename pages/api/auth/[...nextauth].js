import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../../../utils/auth';
import { signToken, verifyToken } from '../../../utils/jwt';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('Credentials:', credentials);

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          console.log('No user found with the username');
          throw new Error('No user found with the username');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          console.log('Invalid password');
          throw new Error('Could not log you in!');
        }

        console.log('User authenticated:', user);
        return { username: user.username, role: user.role };
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
  },
});
