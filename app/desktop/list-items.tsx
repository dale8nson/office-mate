import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { CloudOutlined } from '@mui/icons-material';
import Link from 'next/link';


export const mainListItems = (
  <>
    <ListItemButton LinkComponent={Link} href='/desktop'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText>
        Dashboard
      </ListItemText>
    </ListItemButton>
    <ListItemButton LinkComponent={Link} href='/desktop/lessons'>
      <ListItemIcon>
        <ClassOutlinedIcon />
      </ListItemIcon>
      <ListItemText>
        Lessons
      </ListItemText>
    </ListItemButton>
    <ListItemButton LinkComponent={Link} href='/desktop/a-z'>
      <ListItemIcon>
        <SortByAlphaOutlinedIcon />
      </ListItemIcon>
      <ListItemText sx={{textWrap:'nowrap'}} >
        Documents by Topic
      </ListItemText>
    </ListItemButton>
    <ListItemButton LinkComponent={Link} href='/desktop/tickler'>
      <ListItemIcon>
        <CalendarMonthOutlinedIcon />
      </ListItemIcon>
        <ListItemText>
          Tickler
        </ListItemText>
    </ListItemButton>
    <ListItemButton LinkComponent={Link} href='/desktop/cloud' >
      <ListItemIcon>
        <CloudOutlined />
      </ListItemIcon>
        <ListItemText>
          Cloud
        </ListItemText>
    </ListItemButton>
    
  </>
);