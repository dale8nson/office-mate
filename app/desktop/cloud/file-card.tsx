'use client';
import { Suspense, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FunctionsIcon from '@mui/icons-material/Functions';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { CardMedia } from '@mui/material';
import Paper from '@mui/material/Paper';
import { getThumbnail, getFiles } from './cloud-actions';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
// import ServerImage from './server-image';

const FileCard = ({ thumbLink, fileName, size }) => {
  // const [url, setUrl] = useState('');
  // console.log(`FileCard file:`, file);
  const extensions = {
    null: <FolderOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'pdf': <PictureAsPdfOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'epub': <AutoStoriesOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'docx': <TextSnippetOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'xlsx': <FunctionsIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />
  }

  const ext = fileName.match(/(?<=[.]).+$/);
  const fn = fileName.match(/^[^.]*(?=[.])?/);

  return (
    <Box component='div' sx={{ margin:'auto', width: `${size.width}px`, height:`calc(${size.height}px * 1.25 `}} >
      <Card elevation={2} sx={{ height: '100%', width: '100%', margin: '1rem auto', '& .MuiPaper-root': { margin: 0, height: '100%', width: '100%'} }}>
        {!!thumbLink && <Image alt='thumbnail image' src={thumbLink} width={size.width} height={size.height} style={{ width: '100%', height: '100%', marginInline: 'auto', objectFit:'cover' }} />}
        {!!thumbLink || extensions[ext]}
        <CardContent sx={{ height: `85px`, m:1, overflow:'hidden' }} >
          {/* <Paper variant='outlined' elevation={3} sx={{p:1}}> */}
            <Typography variant='caption' sx={{ fontSize: '0.8rem', textOverflow:'ellipsis' }} >{fn}</Typography>
          {/* </Paper> */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default FileCard;