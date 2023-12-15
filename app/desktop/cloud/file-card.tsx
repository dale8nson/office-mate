import { Suspense } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Document, Page } from '@react-pdf/renderer';
import pdf2html from 'pdf2html';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { CardMedia } from '@mui/material';
import getThumbnail from './get-thumbnail';
import Skeleton from '@mui/material/Skeleton';

const FileCard = async ({ file }) => {

    const extensions = {
        null: <FolderOutlinedIcon />,
        'pdf': <PictureAsPdfOutlinedIcon />,
        'epub': <AutoStoriesOutlinedIcon />,
        'docx': <TextSnippetOutlinedIcon />
    }

    const ext = file.name.match(/(?<=[.]).+$/);
    const access_token = cookies().get('access_token')?.value;

    const options = { page: 1, imageType: 'png', width: 160, height: 226 };

    //   let thumbnail: Blob | null;

    if (file.mimeType.includes('pdf')) {
        const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${file.id}`, { headers: { Authorization: `Bearer ${access_token as string}`, alt: 'media' } });
        const res = await fetch(req).catch(error => console.log(error));
        // for await (const chunk of res?.body) {
        //     b64str += btoa(chunk);

    
    // thumbnail = await pdf2html.thumbnail(b64str);
    // thumbnail = await getThumbnail(file.id).catch(error => console.log(error));
    }
    const fileName = file.name.match(/^[^.]*(?=[.])?/);

    return (
        <Box component='div' sx={{ marginBlock:'5%' }} >
            <Card sx={{ height: '85%', width: '100%', margin:'0 auto', '& .MuiPaper-root': { margin: 0 }}}>
                <Suspense fallback={<Skeleton variant='rectangular' />} >
                        <CardMedia component='iframe' src={await getThumbnail(file.id)} loading='lazy' sx={{marginInline:'auto', height:'220px', width:'150px'}} />
                        {/* {file.mimeType.includes('pdf') && <iframe src={await getThumbnail(file.id).catch(error => console.log(error))} style={{ width: '100%', height: '100%' }} />} */}
                    </Suspense>
                <CardContent sx={{height:'15%'}} >
                    
                    <Typography sx={{ fontSize: '0.75rem' }} >{fileName}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default FileCard;