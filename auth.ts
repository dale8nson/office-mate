import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { cookies } from "next/headers";

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  debug: true,
  callbacks: {
    async jwt({ token, user, account, profile, session }) {
      // const userToken = await SignToken(user?.email as string);
      // const secret = jose.base64url.decode(process.env.NEXTAUTH_SECRET as string);
      // const userToken = await new EncryptJWT(user?.email).setProtectedHeader({alg:'dir', enc:'A128CBC-HS256', typ:'at+JWT'}).encrypt(secret);
      //   token.userToken = userToken;
      return token;
    },
    async signIn({ account, user }) {

      cookies().set('id_token', account?.id_token as string);
      cookies().set('access_token', account?.access_token as string);
      cookies().set('refresh_token', account?.access_token as string);

    console.log(`signIn account:`, account);
    // access_token = account?.access_token as String;
    // console.log(`signIn user:`, user)


    return true // Do different verification for other providers that don't have `email_verified`
    },
    async session({ session, user, token }) {
      // console.log(`session session:`, session);
      // console.log(`token:`, token);
      // console.log(`session user:`, user);
      // session.loggedUser = token.userToken;
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(`signIn user:`, user);
    //   console.log(`signIn account:`, account);
    //   console.log(`signIn profile:`, profile);
    //   console.log(`signIn credentials:`, credentials);

    //   return '/';
    // },
  },
  // secret: process.env.NEXTAUTH_SECRET as string,
  session: {
    strategy: 'jwt'
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        idToken: true,
        params: {
          type: 'oauth',
          scope: "openid profile email https://www.googleapis.com/auth/drive",
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
          redirect_uri: 'http://localhost:3000/api/auth/callback/google'
        }
      },
    })
  ]
});
