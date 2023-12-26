'use client';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';

import { mainListItems } from './list-items';


const drawerWidth: number = 240;

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})
  (({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whitespace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'borderBox',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9)
        }
      })
    }
  }));

const Drawer = ({open, setOpen}) => {

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer variant='permanent' open={open} sx={{ height: '100vh' }} >
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
        <IconButton onClick={toggleDrawer} >
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav' sx={{ alignContent: '' }}>
        {mainListItems}
      </List>
    </StyledDrawer>
  )
}

export default Drawer;