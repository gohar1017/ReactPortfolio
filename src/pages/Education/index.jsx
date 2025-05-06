import { Card, Typography, Box, Chip } from '@mui/material';
import { School, Book, Create } from '@mui/icons-material';
import styles from './Education.module.css';

const educationData = [
  {
    icon: <School fontSize="large" color="error" />,
    title: "Matriculation 🎓",
    description: "Completed my high school with excellence, specializing in Science & Math.",
    year: "2021",
    achievements: "Highest Marks in School, Table Tennis Tournament Winner"
  },
  {
    icon: <Book fontSize="large" color="error" />,
    title: "FSC 🔬",
    description: "Pursued Pre-Engineering, diving deep into physics, mathematics, and computer science.",
    year: "2023",
    achievements: "Robotics Project, Programming Competitions"
  },
  {
    icon: <Create fontSize="large" color="error" />,
    title: "Kindergarten 🏫",
    description: "Where it all began! Learned ABCs, numbers, and the love for learning.",
    year: "2013",
    achievements: "First Prize in Drawing, Best Storyteller"
  }
];

export default function Education() {
  return (
    <Box className={styles.container}>
      <Typography variant="h4" color="error" fontWeight="bold" textAlign="center">
        📚 My Educational Journey
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
        "Every step in my education has shaped my skills and passion for technology."
      </Typography>

      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: 'repeat(3, 1fr)' }} gap={3}>
        {educationData.map((edu, index) => (
          <Card key={index} className={styles.educationCard}>
            <Box textAlign="center" p={3}>
              {edu.icon}
              <Typography variant="h6" fontWeight="bold" mt={2}>
                {edu.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" my={2}>
                {edu.description}
              </Typography>
              <Chip label={`Year: ${edu.year}`} color="error" size="small" />
              <Typography variant="body2" mt={2}>
                <Box component="span" color="warning.main">★</Box> Achievements: {edu.achievements}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}