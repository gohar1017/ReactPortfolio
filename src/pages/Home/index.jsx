import { Box, Typography, Button } from '@mui/material';
import profileImage from '../../assets/Ali\'s Image.jpg';
import styles from './Home.module.css';

export default function Home() {
  return (
    <Box className={styles.mainContent}>
      <Box className={styles.homeContainer}>
        <Box className={styles.profileImageContainer}>
          <img 
            src={profileImage} 
            alt="Ali Gohar" 
            className={styles.profileImage}
            onError={(e) => {
              e.target.src = '/default-profile.jpg';
              console.error('Failed to load profile image', e);
            }}
          />
        </Box>
        
        <Box className={styles.textContent}>
          <Typography variant="h2" className={styles.heading}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" className={styles.subheading}>
            Ali Gohar
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Web & Mobile App Developer passionate about crafting high-performance applications
          </Typography>
          <Box className={styles.buttonGroup}>
            <Button 
              variant="contained" 
              color="primary" 
              className={styles.button}
              href="/profile"
            >
              View Profile
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              className={styles.button}
              href="/contact"
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
