import { Suspense } from 'react';
import Box from '@mui/material/Box';
import { defaultTheme } from '@/app/themes';
import { ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { google } from 'googleapis';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getToken } from '@auth/core/jwt';
import FileCard from './file-card';
import Skeleton from '@mui/material/Skeleton';

const Page = async () => {

  const session = auth();
  console.log(`cloud session:`, session);

  let json: { files: object } | null;

  let getJson: () => Promise<boolean>;

  if (!!session) {
    console.log(`page session:`, session);
    const access_token = cookies()?.get('access_token')?.value;

    // const aboutReq = new NextRequest('https://www.googleapis.com/drive/v3/about?fields=kind,user', {headers:{Authorization:`Bearer ${access_token}`}});
    // const aboutResponse = await fetch(aboutReq);
    // const aboutJson = await aboutResponse.json();
    // console.log(`aboutJson:`, aboutJson);

    const req = new NextRequest('https://www.googleapis.com/drive/v3/files', { headers: { Authorization: `Bearer ${access_token}` } });

    getJson = async () => {
      const res = await fetch(req);
      if (!!res) {
        json = await res.json();
        if (!!json) {
          // console.log(`drive api res:`, json);
          return true;
        }
      }
      return false;
    }
  }

  return (
    <ThemeProvider theme={defaultTheme} >
      <Box component='main' sx={{ display: 'flex' }}>
        <Box component='section' sx={{ display: 'normal', columnCount: 4, columnGap: '2%', flexGrow: 4 }}>
          {(await getJson()) && Object.entries(json.files).map(([key, value]) => {
            return (
              <Suspense key={key} fallback={<Skeleton variant='text' />} loading='lazy' >
                <FileCard file={value} />
              </Suspense>
            )
          })}
        </Box>
        <Box component='section' sx={{ flexGrow: 1 }}>
          <Typography variant='h6' color='primary'>View</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Page;