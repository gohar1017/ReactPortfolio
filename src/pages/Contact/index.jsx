import { Card, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Box className={styles.container}>
      {/* Contact Form */}
      <Card className={styles.contactCard}>
        <Typography variant="h5" color="error" textAlign="center" fontWeight="bold">
          📞 Get in Touch
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Feel free to contact me for collaborations, projects, or any queries.
        </Typography>

        <Box component="form" mt={3}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            placeholder="Enter your name"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            placeholder="Enter your email"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            placeholder="Write your message here"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Card>

      {/* Social Links */}
      <Card className={styles.socialCard}>
        <Typography variant="h6" color="error" fontWeight="bold" textAlign="center">
          🌍 Connect with Me
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Let's collaborate and build something amazing together!
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} mt={3}>
  <IconButton 
    color="primary" 
    className={styles.socialIcon}
    component="a"
    href="https://www.facebook.com/profile.php?id=100041943426129"
    target="_blank"
  >
    <Facebook />
  </IconButton>
  <IconButton 
    color="info" 
    className={styles.socialIcon}
    component="a"
    href="https://twitter.com/yourhandle"
    target="_blank"
  >
    <Twitter />
  </IconButton>
  <IconButton 
    color="error" 
    className={styles.socialIcon}
    component="a"
    href="https://www.linkedin.com/in/ali-gohar-8a4443277"
    target="_blank"
  >
    <LinkedIn />
  </IconButton>
  <IconButton 
    className={styles.socialIcon}
    component="a"
    href="https://github.com/gohar1017"
    target="_blank"
  >
    <GitHub />
  </IconButton>
</Box>

        <Typography mt={2} fontStyle="italic" color="text.secondary" textAlign="center">
          "Stay connected and explore my work!"
        </Typography>
      </Card>
    </Box>
  );
}