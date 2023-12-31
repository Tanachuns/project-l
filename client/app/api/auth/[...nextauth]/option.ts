import { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const option: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: {
    //       label: 'Username',
    //       type: 'text',
    //     },
    //     password: {
    //       label: 'Password',
    //       type: 'password',
    //     },
    //   },
    //   async authorize(credentials) {
    //     const user = { id: 0, name: 'admin', password: 'admin' }
    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user
    //     } else {
    //       return null
    //     }
    //   },
    // }),
  ],
  //   pages:[
  //     signIn:"/login"
  //   ]
}
