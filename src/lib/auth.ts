import { PrismaAdapter } from '@auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import { AuthOptions } from 'next-auth'
import prisma from './prisma'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  }
  // callbacks: {
  //   async session({ session, token, user, }){
  //     session.user = { ...session.user, id: user.id } as {
  //       id: string,
  //       name: string;
  //       email: string;
  //     }


  //     return session;

  //   }
  // }
}