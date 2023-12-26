"use server";
import * as React from 'react';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { imageSize as imgSz } from 'image-size';

let tabIndex = 0;
// let tabRefFunc: (func: Function) => void;

const driveFetch = async (action: string) => {
  const access_token = cookies().get('access_token')?.value;

  return await fetch(`https:www.googleapis.com/drive/v3/${action}`, { headers: { Authorization: `Bearer ${access_token}` } })
}

const getThumbLink: (fileId: string | undefined) => Promise<string> = async (fileId: string | undefined) => {
  if (!fileId) return null;
  const access_token = cookies().get('access_token')?.value;

  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=thumbnailLink`, { headers: { Authorization: `Bearer ${access_token as string}` } });
  console.log(`now fetching thumbnail link for file id ${fileId}`)
  // const file = await fetch(req).then(res => res.json()).catch(error => console.log(`error fetching thumbnail link: ${error}`));
  return fetch(req).then(res => { return res.json() })
    .catch(error => console.log(new Error(error)))
    .then(json => { return console.log(`json:`, json), json?.thumbnailLink || null })
    .catch(error => console.log(new Error(error)));
}

const getRootFolderId = async () => {
  const access_token = cookies().get('access_token')?.value;
  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files?trashed=false&q=mimeType+%3d+%27application/vnd.google-apps.folder%27+and+name%3d%27.OfficeMate%27&fields=files(id)`, { headers: { Authorization: `Bearer ${access_token}` } });

  const res = fetch(req).then(res => { return res.json() }).then(json => {
    console.log(json);
    return json.files[0].id
  });

  return res;

}



const getFiles = async (fields: string | null = null, query: string | null = null, pageToken: string | undefined | null = null) => {
  const access_token = cookies().get('access_token')?.value;
  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files?orderBy=name&pageSize=1000${pageToken? `&pageToken=${pageToken}`: ''}${fields ? `&fields=${fields}`: ''}${query ? `&q=${query}`:''}` , { headers: { Authorization: `Bearer ${access_token}` } });

  const res = fetch(req).then(res => { return res.json() })

  return res;
}

const getFile = async (fileId: string, fields: string | null = null, query: string | null = null) => {
  const access_token = cookies().get('access_token')?.value;
  // console.log(`getFile access_token:`, access_token);

  const req = new NextRequest(`https://www.googleapis.com/drive/v3/files/${fileId}${fields ? '?fields=' + fields : ''}${query && fields ? `&${query}` : query ? `?${query}` :''}`, { headers: { Authorization: `Bearer ${access_token}` } });
  // console.log(`file request:`, req);
  return fetch(req).then(res => res.json());
  // const json = await res.json();
  // console.log(`getFiles files:`, json);
  // return json;
}

const getFileParentIDs = async (fileId: string | undefined) => {
  if (!fileId) return null;
  const access_token = cookies().get('access_token')?.value;
  const url = new URL(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=parents`);
  if (!URL.canParse(url)) return null;
  const req = new NextRequest(url, { headers: { Authorization: `Bearer ${access_token as string}` } });
  return fetch(req)
    .then(res => res.json()).catch(error => { return console.log(new Error(`fileID ${fileId}: ${error}`)), null })
    .then(json => { return Object.keys(json).length > 0 ? json.parents[0] : null })
    .catch(error => { return console.log(new Error(error)), null });
  // console.log(`file:`, file);
  // return (typeof file === 'object' && Object.keys(file).length > 0) ? file.parents[0] : null;
}

const getImageSize = async (url: string | null) => {
  if(!url) return {width: 256, height: 256};
  const req = new NextRequest(`${url}?alt=media`);
  const res = await fetch(req);
  const ab = await res.arrayBuffer();
  const buf = Buffer.from(ab);
  let sz = {}
  try {
  sz = imgSz(buf);
  } catch (e) {
    console.log(new Error(e));
    return null;
  }
  // const sz = fetch(req).then(res => res.arrayBuffer()).then(ab => Buffer.from(ab)).then(buf => imgSz(buf)).then(imgSz => { return { width: imgSz.width, height: imgSz.height } });
  return sz;
}

export { getThumbLink, getFiles, getFileParentIDs, driveFetch, getImageSize, getFile, getRootFolderId };