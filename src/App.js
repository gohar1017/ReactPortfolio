import { lazy, Suspense, useState, useContext, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, Typography, useMediaQuery } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeContext, ThemeProvider as CustomThemeProvider } from './context/ThemeContext';
import { lightTheme, darkTheme } from './theme/theme';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Skills = lazy(() => import('./pages/Skills'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));

// Main App component with theme support
function ThemedApp() {
  const { mode } = useContext(ThemeContext);
  const isMobile = useMediaQuery('(max-width:900px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Create theme based on current mode
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <PageTitleProvider>
          <Box sx={{ 
            display: 'flex', 
            minHeight: '100vh', 
            flexDirection: 'column',
            backgroundColor: 'background.default'
          }}>
            <CssBaseline />
            <Header toggleSideNav={handleDrawerToggle} />

            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              {/* Mobile Sidebar */}
              {isMobile && (
                <SideNav
                  mobileOpen={mobileOpen}
                  handleDrawerToggle={handleDrawerToggle}
                />
              )}

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  minHeight: 'calc(100vh - 64px)',
                  backgroundColor: 'background.default'
                }}
              >
                <Suspense fallback={
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="80vh"
                  >
                    <Typography>Loading...</Typography>
                  </Box>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </Box>
            </Box>

            <Footer />
          </Box>
        </PageTitleProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

// App wrapper for theme provider
export default function App() {
  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  );
}