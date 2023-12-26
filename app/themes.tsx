'use client';

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function ThemeProvider({ children }) {
  return (

    <MUIThemeProvider theme={defaultTheme}  >
      {children}
    </MUIThemeProvider>

  )
}