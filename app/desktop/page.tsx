'use client';
import { ThemeContext } from '@emotion/react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { defaultTheme } from '../themes';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { Redirect } from 'next';
import { auth } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';


const Page = () => {
  const session = auth();
  if(!session) redirect('/');


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box component='main' >
          <Typography variant='h2' color='primary' >Desktop</Typography>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default Page;