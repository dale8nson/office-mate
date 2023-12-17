'use client';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FolderTabs = ({ files }) => {

  const [tabIndex, setTabIndex] = useState(0);

  const tabChanged = (e, v) => {
    setTabIndex(v);
  }
  return (
    
      <Box sx={{ width: '10vw', bgcolor: 'background.paper', margin: 0, position: 'fixed', top:'8%', left:'5%', height:'100vh' }} >
        <Tabs orientation='vertical' value={tabIndex} variant='scrollable' onChange={tabChanged} sx={{marginInline:'auto', position:'static'}} >
          {files.map((file, index) => {
            return (
              <Tab key={file.id} label={file.name} sx={{ marginInline: 'auto' }} />
            )
          })}
        </Tabs>
      </Box>

  )
}

export default FolderTabs;