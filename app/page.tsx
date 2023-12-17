import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import Button from '@mui/material/Button'

export default async function Page() {

  const session = await auth();
  console.log(`session:`, session);

  if(!!session) { redirect('/desktop'); }
  else { redirect('/api/auth/signin/google')}

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
