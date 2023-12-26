import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import UI from './ui';
import Main from './main';
import ThemeProvider from '../themes';


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <ThemeProvider>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <UI />
          <Main>
            {children}
          </Main >
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Layout;