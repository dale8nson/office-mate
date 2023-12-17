"use server";
import * as React from 'react';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { The_Nautigal } from 'next/font/google';

const driveFetch = async (action: string) => {
  const access_token = cookies().get('access_token')?.value;

  return await fetch(`https:www.googleapis.com/drive/v3/${action}`, {headers:{Authorization:`Bearer ${access_token}` }})
}

const getThumbnail: (fileId: string) => Promise<string|React.ReactElement> = async (fileId: string) => {
  const access_token = cookies().get('access_token')?.value;
  const extensions = {
    folder: React.createElement(FolderOutlinedIcon),
    pdf: React.createElement(PictureAsPdfOutlinedIcon),
    epub: React.createElement(AutoStoriesOutlinedIcon),
    docx: React.createElement(TextSnippetOutlinedIcon)
  }

  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=thumbnailLink,iconLink,contentHints,imageMediaMetadata`, { headers: { Authorization: `Bearer ${access_token as string}` } });
  const file = await fetch(req).then(res => res.json()).catch(error => console.log(error));
  // console.log(`file json:`, file);
// if(!!(file?.thumbnailLink)) {
  // const urlReq = new NextRequest(file.thumbnailLink);
  // const url = await fetch(file.thumbnailLink).then(res => res.text()).catch(error => console.log(error));
  const url = file?.thumbnailLink || null;
  // console.log(`url json:`, url as string);
  return url;
// }
  
  
}

const getFiles = async () => {
  const access_token = cookies().get('access_token')?.value;
  // console.log(`getFiles access_token:`, access_token);
  const req = new NextRequest('https://www.googleapis.com/drive/v3/files', { headers: { Authorization: `Bearer ${access_token}` } });
  const res = await fetch(req).then(res => res.json()).then(json => json.files).then(files => files.sort((f1, f2) => f1.name < f2.name ? -1 : f1.name === f2.name ?  0 : 1));
  // console.log(`getFiles files:`, res.files);
  return res;
}

const getFile = async (fileId: string) => {
  const access_token = cookies().get('access_token')?.value;
  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${fileId}`, { headers: { Authorization: `Bearer ${access_token as string}`, alt: 'media' } });
  const file = await fetch(req).then(res => res.json()).catch(error => console.log(error));
}


export  { getThumbnail, getFiles, getFile, driveFetch };