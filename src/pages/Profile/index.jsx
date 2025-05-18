import { useState } from 'react';
import { 
  Card, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Box, 
  Avatar,
  LinearProgress,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  ExpandMore,
  Book,
  Movie,
  SportsBaseball,
  Psychology,
  Security
} from '@mui/icons-material';
import profileImage from '../../assets/ali.jpg';
import styles from './Profile.module.css';

export default function Profile() {
  const [expanded, setExpanded] = useState('panel1');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const profileInfo = (
    <>
      <Box className={styles.avatarContainer}>
        <Avatar
          src={profileImage}
          alt="Ali Gohar"
          className={styles.avatar}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Typography variant="h5" className={styles.name}>
        Ali Gohar
      </Typography>
      <Typography variant="body2" className={styles.title}>
        Web & Mobile App Developer
      </Typography>
      <Typography variant="body2" className={styles.quote}>
        "Passionate about crafting high-performance web and Android applications."
      </Typography>
    </>
  );

  const interestsCard = (
    <Card className={styles.interestsCard}>
      <Typography variant="h6" className={styles.sectionTitle}>
        <Box component="span" mr={1}>★</Box> Passions & Interests
      </Typography>
      <Box mt={1}>
        <Typography variant="body2">
          <Box component="span" color="primary.main">🎬</Box> Watching Movies
        </Typography>
        <Typography variant="body2">
          <Box component="span" color="success.main">🏏</Box> Playing Cricket
        </Typography>
        <Typography variant="body2">
          <Box component="span" color="warning.main">💻</Box> Coding
        </Typography>
      </Box>
    </Card>
  );

  return (
    <Box className={styles.container}>
      {/* Mobile Header (only shows on mobile) */}
      {isMobile && (
        <Box className={styles.mobileHeader}>
          {profileInfo}
          {interestsCard}
        </Box>
      )}

      {/* Desktop Sidebar (only shows on larger screens) */}
      {!isMobile && (
        <Card className={styles.profileSidebar}>
          <Box textAlign="center" p={3}>
            {profileInfo}
            {interestsCard}
          </Box>
        </Card>
      )}

      {/* Main Content */}
      <Box className={styles.mainContent}>
        {!isMobile && (
          <Typography variant="h4" className={styles.mainTitle}>
            About Me
          </Typography>
        )}

        {/* Background Accordion */}
        <Accordion 
          expanded={expanded === 'panel1'} 
          onChange={handleChange('panel1')}
          className={styles.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMore />} className={styles.accordionHeader}>
            <Box display="flex" alignItems="center">
              <Book color="error" sx={{ mr: 1 }} />
              <Typography fontWeight="bold">My Background</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" className={styles.sectionTitle}>
                My Journey
              </Typography>
              <Box mt={2}>
                <Typography>
                  <Box component="span" color="success.main">✓</Box> FSC from KIPS Dera Ghazi Khan
                </Typography>
                <Typography>
                  <Box component="span" color="success.main">✓</Box> Learned C++, problem solving, and web development
                </Typography>
                <Typography>
                  <Box component="span" color="success.main">✓</Box> Exploring Full-Stack Development
                </Typography>
              </Box>
            </Card>
          </AccordionDetails>
        </Accordion>

        {/* Other Accordions (remain the same) */}
        
        {/* Goals Accordion */}
        <Accordion 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
          className={styles.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMore />} className={styles.accordionHeader}>
            <Typography fontWeight="bold">My Goals</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography mb={2} fontWeight="bold">Current Focus:</Typography>
            <Box mb={2}>
              <Typography>Full-Stack Development</Typography>
              <LinearProgress 
                variant="determinate" 
                value={80} 
                color="error" 
                className={styles.progressBar}
              />
              <Typography textAlign="center">80%</Typography>
            </Box>
            <Box>
              <Typography>Open Source Contributions</Typography>
              <LinearProgress 
                variant="determinate" 
                value={60} 
                color="warning" 
                className={styles.progressBar}
              />
              <Typography textAlign="center">60%</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Interests Accordion */}
        <Accordion 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
          className={styles.accordion}
        >
          <AccordionSummary expandIcon={<ExpandMore />} className={styles.accordionHeader}>
            <Typography fontWeight="bold">My Interests</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className={styles.interestsGrid}>
              {[
                { icon: <Psychology color="error" />, title: "Artificial Intelligence" },
                { icon: <Security color="error" />, title: "Cybersecurity" },
                { icon: <Movie color="error" />, title: "Watching Movies" },
                { icon: <SportsBaseball color="error" />, title: "Cricket" }
              ].map((item, index) => (
                <Card key={index} className={styles.interestCard}>
                  {item.icon}
                  <Typography mt={1} fontWeight="bold">{item.title}</Typography>
                </Card>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* ... */}
      </Box>
    </Box>
  );
}
        
    