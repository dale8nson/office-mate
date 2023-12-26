import Image from 'next/image';
import { auth, signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';
import Button from '@mui/material/Button'

export default async function Page() {

  const session = await auth();
  console.log(`session:`, session);

  if(!!session) { redirect('/desktop'); }
  else { redirect('/api/auth/signin/google')}

}
