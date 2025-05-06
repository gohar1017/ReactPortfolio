import { Card, Typography, LinearProgress, Box, List, ListItem, ListItemIcon } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import styles from './Skills.module.css';

// Import images
import drivingImage from '../../assets/car.jpg';
import languageImage from '../../assets/language.jpg';
import computingImage from '../../assets/skill.jpg';
import communicationImage from '../../assets/communication.jpg';

const skillsData = [
  {
    title: "Driving Skills",
    image: drivingImage,
    items: [
      "Licensed to drive cars, motorcycles, and heavy vehicles",
      "Strong understanding of traffic rules & road safety"
    ],
    progress: 85,
    color: "error"
  },
  {
    title: "Language Skills",
    image: languageImage,
    items: [
      "Fluent in Urdu",
      "Proficient in English",
      "Basic understanding of French & German"
    ],
    progress: 75,
    color: "warning"
  },
  {
    title: "Computing Skills",
    image: computingImage,
    items: [
      "Proficient in Python, Java, JavaScript",
      "Strong problem-solving & algorithmic skills",
      "Knowledge of database management (SQL, MongoDB)"
    ],
    progress: 90,
    color: "success"
  },
  {
    title: "Communication Skills",
    image: communicationImage,
    items: [
      "Confident in public speaking & presentations",
      "Excellent at team collaboration & leadership"
    ],
    progress: 80,
    color: "info"
  }
];

export default function Skills() {
  return (
    <Box className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h2" className={styles.title}>
          My Skills
        </Typography>
        <Typography variant="body1" className={styles.subtitle}>
          Here are some of my key skills in different areas
        </Typography>
      </Box>

      <Box className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <Card key={index} className={styles.skillCard}>
            <img 
              src={skill.image} 
              alt={skill.title} 
              className={styles.skillImage}
              onError={(e) => {
                e.target.src = '/default-skill.jpg';
                console.error(`Failed to load ${skill.title} image`);
              }}
            />
            <Box className={styles.skillContent}>
              <Typography variant="h5" className={styles.skillTitle}>
                {skill.title}
              </Typography>
              <ul className={styles.skillList}>
                {skill.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>
                    {item}
                  </li>
                ))}
              </ul>
              <Box className={styles.progressContainer}>
                <LinearProgress
                  variant="determinate"
                  value={skill.progress}
                  color={skill.color}
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography variant="body2" textAlign="center" mt={1}>
                  {skill.progress}%
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}