import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.css';

export default function Header({ toggleSideNav }) {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <IconButton 
          edge="start" 
          color="inherit" 
          onClick={toggleSideNav} 
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={styles.title}>
          My Portfolio
        </Typography>
        <Avatar 
          src="/assets/ali.jpg" 
          className={styles.avatar}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          className={styles.menu}
        >
          <MenuItem onClick={() => console.log('Logout placeholder')}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}