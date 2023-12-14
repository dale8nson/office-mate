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

const Page = async ({searchParams, params}:{searchParams?:{query?: string, page?: string}, params?: {}}) => {
  console.log(`params:`, params);

  const session = await auth();
  console.log(`cloud session:`, session);

  let json: object;
  if (!!session) {
    console.log(`page session:`, session);
    const access_token = cookies()?.get('access_token')?.value;

    const aboutReq = new NextRequest('https://www.googleapis.com/drive/v3/about?fields=kind,user', {headers:{Authorization:`Bearer ${access_token}`}});
    const aboutResponse = await fetch(aboutReq);
    const aboutJson = await aboutResponse.json();
    console.log(`aboutJson:`, aboutJson);

    const req = new NextRequest('https://www.googleapis.com/drive/v3/files', { headers: { Authorization: `Bearer ${access_token}` } });

    const res = await fetch(req);

    json = await res.json();
    // console.log(`drive api res:`, json);
  }
 
  return (
    <ThemeProvider theme={defaultTheme} >
      <Box component='main'>
        <Box component='section' sx={{display:'normal', columnCount:5, columnGap:'2%'}}>
          {!!session && Object.entries(json.files).map(([key, value]) => {
        return <FileCard key={key} file={value} />
      })}
      {/* {!!session && json?.drives.map(async drive =>  <Typography key={drive} variant='h3' color='secondary'>{`${drive}`}</Typography>) } */}

        </Box>
        <Box component='section' sx={{flexGrow:1}}>
        <Typography variant='h6' color='primary'>View</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Page;