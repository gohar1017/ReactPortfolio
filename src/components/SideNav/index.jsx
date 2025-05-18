import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, School, Person, Mail, Code } from '@mui/icons-material';
import styles from './SideNav.module.css';

export default function SideNav({ mobileOpen, handleDrawerToggle }) {
  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Profile', icon: <Person />, path: '/profile' },
    { text: 'Skills', icon: <Code />, path: '/skills' },
    { text: 'Education', icon: <School />, path: '/education' },
    { text: 'Contact', icon: <Mail />, path: '/contact' }
  ];

  const drawerContent = (
    <div>
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
            <ListItemText primary={item.text} className={styles.listText} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          marginTop: '56px', // Adjust for header height
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
}

