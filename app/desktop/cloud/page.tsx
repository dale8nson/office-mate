import React, { Suspense, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { auth } from '@/auth';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import FolderTabs from './folder-tabs';
// import { imageSize } from 'image-size';
import Skeleton from '@mui/material/Skeleton';
import { getFile, getFiles, getThumbLink, getFileParentIDs, getRootFolderId, getImageSize } from './cloud-actions';

interface Size {
  width: number | undefined,
  height: number | undefined
}

interface FileMeta {
  name: string,
  id: string,
  mimeType: string,
  parents: string[],
  hasThumbnail: boolean,
  thumbnailLink: string
}

interface FileCardProps {
  thumbLink: string | null,
  fileName: string,
  size: Size
}

type FilesMeta = { name: string, id: string, mimeType: string, kind: string }

type TabFileGroups = { [id: symbol]: Promise<string>[] };


type FileGroup = Promise<FileCardProps>[];


const Page = async () => {

  const session = await auth();

  const rootFolderId = await getRootFolderId();

  // console.log(`rootFolderId: ${rootFolderId}`);

  let files: FileMeta[] = [];
  let folders: FileMeta[] = [];

  const getTopLevelFolders = async (folderNames: { [id: string]: string } = {}, pageToken = null) => {
    const rootFolderId = await getRootFolderId();
    const folders = await getFiles('files(id,name),nextPageToken', `%27${rootFolderId}%27+in+parents+and+mimeType+contains+%27folder%27`, pageToken);
    for (const folder of folders.files) {
      folderNames[folder.id] = folder.name;
    }
    if (Object.hasOwn(folders, 'nextPageToken')) void await getTopLevelFolders(folderNames, folders.nextPageToken);

    return folderNames;
  }

  const folderNames = getTopLevelFolders();
  // console.log(`folderNames`, folderNames);

  const getFolderFiles = async (folderId, files = [], pageToken: string | null = null) => {

    const fs: { nextPageToken?: string | undefined, files: [] } = await getFiles('files(id,parents,name,mimeType,hasThumbnail,thumbnailLink,iconLink),nextPageToken', `%27${folderId}%27+in+parents`, pageToken);

    // console.log(`fs:`, fs);

    const fileIds = [];
    // console.log()
    for (const file of fs.files) {
      fileIds.push(file.id);
    }

    files.push(fs);

    if (Object.hasOwn(fs, 'nextPageToken')) void await getFolderFiles(folderId, files, fs.nextPageToken);

    return files;

  }

  const getFolderFileMap = async (folderFileMap = {}) => {
    const folderNames = await getTopLevelFolders();
    for (const id in folderNames) {
      // console.log(`folder ID:`, id);
      const files = await getFolderFiles(id);
      folderFileMap[id] = {folderName:folderNames[id],files: [...files[0].files]};
    }
    // console.log(`folderFileMap:`, folderFileMap);

    return folderFileMap;
  }

  const folderFileMap = getFolderFileMap();
  // console.log(`folderFileMap:`, folderFileMap);

  
  const getImageSizes = async () => {
    const map = await folderFileMap;
    const imageSizes = {};
    for (const folderId in map) {
      console.log(`map[${folderId}]:`, map[folderId]);
      for(const file of map[folderId].files) {
        imageSizes[file.id] = getImageSize(file.thumbnailLink);
      }
    }
    console.log(`imagSizes:`, imageSizes);

    return imageSizes;
  }
  const imageSizes = getImageSizes();
  console.log(`imageSizes:`, imageSizes);

  const getFileNames = async (fileNames: { [id: string]: string } = {}, pageToken = null) => {

    const files = await getFiles('files(id,name),nextPageToken', null, pageToken);
    // console.log(`files:`, files);
    for (const file of files.files) {
      fileNames[file.id] = file.name;
    }
    if (Object.hasOwn(files, 'nextPageToken')) void await getFileNames(fileNames, files.nextPageToken);

    return fileNames;

  }

  let fileNames = {}

  // fileNames = getFileNames();
  // console.log(`fileNames:`, fileNames);

  return (
    <Box component='main' sx={{ width: '100%', height: '100%' }}>
      <Suspense fallback={<Skeleton variant='rounded' width='100%' height='100%' />} >
        <FolderTabs {...{ folderNames, folderFileMap, imageSizes }} />
      </Suspense>
    </Box>
  );

}

export default Page;