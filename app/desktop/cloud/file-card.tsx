'use client';
import { Suspense, useState, useEffect, use } from 'react';
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
import { getThumbLink, getFiles, getImageSize } from './cloud-actions';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
// import ServerImage from './server-image';

const FileCard = ({ fileId, file, fileName, thumbLink, index, tabIndex, imageSize }) => {
  // const [url, setUrl] = useState('');
  const [size, setSize] = useState(null);
  // console.log(`FileCard fileName: ${fileName}`);
  // if(!fileName) fileName = 'blank.docx';
  // console.log(`FileCard size:`, size);
  const extensions = {
    null: <FolderOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'pdf': <PictureAsPdfOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'epub': <AutoStoriesOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'docx': <TextSnippetOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />,
    'xlsx': <FunctionsIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />
  }

  useEffect(() => {

    // getImageSize(thumbLink).then(size => setSize(size || null));
    imageSize.then(sz => setSize(sz));

  },[]);

  // const f = use(file)
  let thumbnail: string | null = null;
  // let size: {width: number | undefined, height: number | undefined} = {width: 256, height: 256};
  // if(!!thumbLink) size =  getImageSize(thumbLink as string);
  // console.log(`size:`, size);

  // console.log(`FileCard fileName: ${fileName}`);
  const ext = fileName.match(/(?<=[.]).+$/) || 'docx';
  const fn = fileName.match(/^[^.]*(?=[.])?/);

  return (
    <>
       {(size) ? <Box hidden={index !== tabIndex}  component='div' sx={{ position: 'relative', margin: 'auto', width: `${size?.width}px`, height: `calc(${size?.height}px * 1.25 ` }} >
          <Card elevation={2} sx={{ height: '100%', width: '100%', margin: '1rem auto', '& .MuiPaper-root': { margin: 0, height: '100%', width: '100%' } }}>
            {!!thumbLink ?
              
                <Image alt='thumbnail image' src={thumbLink} width={size?.width} height={size?.height} style={{ marginInline: 'auto', objectFit: 'cover' }} />
              :
              extensions[ext] || <TextSnippetOutlinedIcon sx={{ display: 'block', width: '128px', height: '128px', marginInline: 'auto' }} />}
            <CardContent sx={{ height: `85px`, m: 1, overflow: 'hidden' }} >
              <Typography variant='caption' sx={{ fontSize: '0.8rem', textOverflow: 'ellipsis' }} >{fn}</Typography>
            </CardContent>
          </Card>
        </Box> :
        <Skeleton width={'156px'} height={'353px'} sx={{marginBlock:'2.5%'}} />}
    </>
  );
}

export default FileCard;