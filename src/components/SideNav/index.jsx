import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Home, School, Person, Mail, Code, ChevronLeft, ChevronRight } from '@mui/icons-material';
import styles from './SideNav.module.css';

export default function SideNav({ mobileOpen, handleDrawerToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
    { text: 'Skills', icon: <Code />, path: '/skills' },
    { text: 'Education', icon: <School />, path: '/education' },
    { text: 'Contact', icon: <Mail />, path: '/contact' }
  ];

  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
  };

  const drawer = (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={toggleDrawer} className={styles.toggleButton}>
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            component="a" 
            href={item.path}
            onClick={handleDrawerToggle}
            className={styles.listItem}
          >
            <ListItemIcon className={styles.listIcon}>
              {item.icon}
            </ListItemIcon>
            {(!isCollapsed || isHovered) && (
              <ListItemText primary={item.text} className={styles.listText} />
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
  
  return (
    <nav className={styles.drawer}>
      {/* Desktop */}
      <Drawer
        variant="permanent"
        sx={{ 
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            width: isCollapsed ? 72 : 240,
            overflowX: 'hidden',
            transition: 'width 0.3s ease',
            ...(isHovered && isCollapsed && {
              width: 240,
              boxShadow: 3
            })
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      
      {/* Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ 
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240 }
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
}