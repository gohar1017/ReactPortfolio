import { useState, useContext } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Avatar, 
  Menu, 
  MenuItem, 
  Typography, 
  useMediaQuery, 
  Box,
  Tooltip
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styles from './Header.module.css';
import avatarImage from '../../assets/avatar.jpg';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header({ toggleSideNav }) {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleColorMode, mode } = useContext(ThemeContext);
  const theme = useTheme();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Profile', path: '/profile' },
    { text: 'Skills', path: '/skills' },
    { text: 'Education', path: '/education' },
    { text: 'Contact', path: '/contact' }
  ];

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleSideNav}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Navbar */}
        {!isMobile && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                variant="h6"
                component="a"
                href={item.path}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        )}

        {/* Title (visible in both mobile and desktop) */}
        <Typography variant="h6" className={styles.title}>
          My Portfolio
        </Typography>

        {/* Dark Mode Toggle */}
        <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
          <IconButton onClick={toggleColorMode} color="inherit" sx={{ mr: 1 }}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>

        {/* Avatar and Menu */}
        <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
          <Avatar
            src={avatarImage}
            alt="Profile"
            className={styles.avatar}
            sx={{
              width: 40,
              height: 40,
              border: '2px solid white',
              cursor: 'pointer'
            }}
          />
        </IconButton>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          className={styles.menu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem 
            component="a" 
            href="/profile"
            onClick={handleMenuClose}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Avatar 
              src={avatarImage} 
              sx={{ width: 24, height: 24 }} 
            />
            Go to Profile
          </MenuItem>
          <MenuItem onClick={() => {
            console.log('Logout clicked');
            handleMenuClose();
          }}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}