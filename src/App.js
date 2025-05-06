import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme, Typography } from '@mui/material';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import { PageTitleProvider } from './context/PageTitleContext';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Skills = lazy(() => import('./pages/Skills'));
const Education = lazy(() => import('./pages/Education'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  

  // In App.js
const [isCollapsed, setIsCollapsed] = useState(false);

const toggleSidebar = (state) => {
  setIsCollapsed(state);
};

// Pass props to SideNav
<SideNav 
  isCollapsed={isCollapsed}
  toggleSidebar={toggleSidebar}
  // ... other props
/>

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#197642',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageTitleProvider>
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <CssBaseline />
          <Header toggleSideNav={handleDrawerToggle} toggleTheme={toggleTheme} darkMode={darkMode} />
          
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <SideNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            
            <Box 
              component="main" 
              sx={{ 
                flexGrow: 1, 
                p: 3,
                paddingBottom: '80px',
                transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                marginLeft: { sm: '240px' },
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
  );
}