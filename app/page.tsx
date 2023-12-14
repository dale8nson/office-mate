import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'
import { Auth } from '@auth/core';
import Google from '@auth/core/providers/google';
import Button from '@mui/material/Button'
import { getToken } from '@auth/core/jwt';
import type { GetTokenParams } from '@auth/core/jwt';
import { EncryptJWT } from 'jose';
import * as jose from 'jose';






export default async function Page() {

  const session = await auth();
  console.log(`session:`, session);


  return (
    <>
      {!!session ? <p>Hello {session?.user?.name}</p>
        : <p> Please sign in to see message</p>}
      <Button href='http://localhost:3000/api/auth/signin/google' disabled={!session ? false : true} >Sign in</Button>
      <Button href='http://localhost:3000/api/auth/signout/google' disabled={!!session ? false : true} >Sign out</Button>
      <Button href='http://localhost:3000/desktop' disabled={!!session ? false : true} >Desktop</Button>
    </>
  )
}
