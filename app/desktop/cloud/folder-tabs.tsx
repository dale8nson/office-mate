'use client';
import { useState, useEffect, useRef, useMemo, use, Suspense, ReactElement } from 'react';
import { SetStateAction, Dispatch, JSXElementConstructor } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import FileCard from './file-card';
import Typography from '@mui/material/Typography';
import { getFiles, getFileParentIDs, getThumbLink, imageSize } from './cloud-actions';
import FileView from './file-view';
import { ThemeContext } from '@emotion/react';
import { DataObjectSharp } from '@mui/icons-material';
import { NextRequest } from 'next/server';
import { metadata } from '@/app/layout';
import { Skeleton } from '@mui/material';

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

const FolderTabs = ({ folderNames, folderFileMap, imageSizes }) => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [folderFileMap, setFolderFileMap] = useState(null)
  // folderFileMap = JSON.parse(folderFileMap);

  const [tabs, setTabs]: [ReactElement[] | null, unknown] = useState<ReactElement[] | null>(null);
  // const [fileCards, setFileCards]: [ReactElement[] | null, unknown] = useState<ReactElement[] | null>(null);
  const [ffm, setFfm]: [ReactElement[] | null, unknown] = useState<ReactElement[] | null>(null);

  // console.log(`folderFileMap:`, folderFileMap);
  folderFileMap.then(map => console.log(`folderFileMap:`, map));

  const fileCards = useMemo(() => {
      let index = 0;
      const fileGroups: ReactElement[] = [];
      for (const folderId in ffm) {
        const fileCards: ReactElement[] = [];
        for (const meta of ffm[folderId].files) {
          fileCards.push(
              <FileCard index={index} tabIndex={tabIndex} fileId={meta.id} imageSize={imageSizes[meta.id]} file={meta} fileName={meta.name} thumbLink={meta.hasThumbnail ? meta.thumbnailLink : null} />
          )
          console.log(`fileCards:`, fileCards);
        }
        fileGroups.push(
          <>
             {index === tabIndex && (<Box key={folderId} hidden={index !== tabIndex}  sx={{ display: 'grid', position: 'absolute', top: '20px', left: '50px', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '2.5%' }} >
                {fileCards}
              </Box>)}
          </>
        )
        index++;
      }
      console.log(`fileGroups:`, fileGroups)
      return fileGroups;
    },[ffm, tabIndex]);
  

  useEffect(() => {


    folderNames.then(names => {
      console.log(`folderNames (length: ${Object.keys(names).length}):`, names)
      const tbs: ReactElement[] = [];
      let index = 0;
      for (const id in names) {
        tbs.push(
          <Tab key={id} value={index++} label={names[id]} />
        )
      }

      setTabs(tbs);
      // setTabIndex(0);
    });

    folderFileMap.then(map => setFfm(map));
    // folderFileMap.then(map => {
    //   console.log(`folderFileMap map:`, map);
    //   let index = 0;
    //   const fileGroups: ReactElement[] = [];
    //   for (const folderId in map) {
    //     const fileCards: ReactElement[] = [];
    //     for (const meta of map[folderId].files) {
    //       fileCards.push(
    //         <Suspense key={meta.id} fallback={<Skeleton variant='rounded' />} >
    //           <FileCard index={index} tabIndex={tabIndex} fileId={meta.id} file={meta} fileName={meta.name} thumbLink={meta.hasThumbnail ? meta.thumbnailLink : null} />
    //         </Suspense>
    //       )
    //       console.log(`fileCards:`, fileCards);
    //     }
    //     fileGroups.push(
    //       <>
    //          {index === tabIndex && (<Box key={folderId} hidden={index !== tabIndex}  sx={{ display: 'grid', position: 'absolute', top: '20px', left: '50px', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: '2.5%' }} >
    //             {fileCards}
    //           </Box>)}
    //       </>
    //     )
    //     index++;
    //   }
    //   console.log(`fileGroups:`, fileGroups)
    //   setFileCards(fileGroups);
    // })
  }, [folderFileMap, folderNames, tabIndex]);

  // folderFileMap.then(map => console.log(`folderFileMap:`, map));

  const tabChanged = (e, v) => {
    console.log(`new tab index: ${v}`);
    setTabIndex(v);
  }

  return (
    <Box component='main' sx={{ display: 'flex', width: '100vw', height: '100vh' }} >
      <Box component='section' sx={{ width: '10%', bgcolor: 'background.paper', margin: 0, position: 'fixed', top: '65px', left: '5%', height: '100vh', zIndex: 5 }} >
        <Tabs orientation='vertical' value={tabIndex} variant='scrollable' onChange={tabChanged} sx={{ marginInline: 'auto' }} >
          {tabs}
        </Tabs>
      </Box>
      <Box component='section' sx={{ width: '80%', height: '90%', position: 'absolute', top: '10%', left: '20%', overflowY: 'scroll', zIndex: 1 }}>
          {fileCards}
      </Box>
    </Box>

  )
}

export default FolderTabs;