
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerAppBar from './DrawerAppBar';
import SimpleBottomNavigation from './SimpleBottomNavigation';

const theme = createTheme();

function ResponsiveNavigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      {isMobile ? <SimpleBottomNavigation /> : <DrawerAppBar />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveNavigation />
    </ThemeProvider>
  );
}
