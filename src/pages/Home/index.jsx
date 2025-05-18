
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import profileImage from '../../assets/Ali\'s Image.png';
import styles from './Home.module.css';

export default function Home() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Box className={styles.mainContent}>
      <Box className={`${styles.homeContainer} ${isMobile ? styles.mobileLayout : ''}`}>
        <Box className={`${styles.profileImageContainer} ${isMobile ? styles.mobileImage : ''}`}>
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
        
        <Box className={`${styles.textContent} ${isMobile ? styles.mobileText : ''}`}>
          <Typography variant={isMobile ? "h3" : "h2"} className={styles.heading}>
            Welcome to My Portfolio
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} className={styles.subheading}>
            Ali Gohar
          </Typography>
          <Typography variant="body1" className={styles.description}>
            Web & Mobile App Developer passionate about crafting high-performance applications
          </Typography>
          <Box className={`${styles.buttonGroup} ${isMobile ? styles.mobileButtons : ''}`}>
            <Button 
              variant="contained" 
              color="primary" 
              className={styles.button}
              href="/profile"
              size={isMobile ? "small" : "medium"}
            >
              View Profile
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              className={styles.button}
              href="/contact"
              size={isMobile ? "small" : "medium"}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
