import { Suspense, useEffect, useRef, useState } from 'react';
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
import FolderTabs from './folder-tabs';
import Skeleton from '@mui/material/Skeleton';
import { getFiles, driveFetch, getThumbnail, getFile } from './cloud-actions';
import { useSession } from 'next-auth/react';
import { imageSize } from 'image-size';
import { Face2 } from '@mui/icons-material';


const Page = async () => {

  const session = await auth();
  console.log(`cloud session:`, session);
  let files, fileCards = Array();
  let folders: object[];
  if (!!session) {
    files = await getFiles();
    console.log(`cloud page files:`,  files);

    let size;
    const filteredFiles = files.filter(file => !(file.mimeType.includes('folder')));
     

      fileCards = filteredFiles.map(async file => {
      const thumbLink = await getThumbnail(file.id);
      // console.log(`thumbLink: ${thumbLink}`);
      if (thumbLink) {
        const ab = await fetch(thumbLink as string).then(res => res.arrayBuffer());
        const buf = Buffer.from(ab);
        size = imageSize(buf);
      } else {
        size = { width: 256, height: 256 }
      }


      return (
        <FileCard key={file.id} {...{ thumbLink: thumbLink ?? null, fileName: file.name, size }} />
      );
    });

    folders = await files.filter(file => {
      return file.mimeType.includes('folder');
    })


    // console.log(`cloud page files:`, files);
  }
  return (
      <Box component='main' sx={{ display: 'flex', justifyContent:'space-between' }} >
        <Box component='section' sx={{ flexBasis: 1, position:'relative', width:'5vw', bgcolor:'background.paper' }}>
          <FolderTabs files={folders} />
        </Box>
        <Box component='section' sx={{height: '100%', width: '100%', display:'grid', flexBasis:4, gridTemplateColumns:'repeat(4, auto)', gridAutoColumns:'minmax(100px, 256px)', rowGap:'0.625%' }}>
          {fileCards}
        </Box>
      </Box>
  );
}



export default Page;