import Controller from './Controller';
import { Container, CssBaseline, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center">
        <Typography variant="h3" align="center">
          Product Sorting with MVC
        </Typography>
        <Controller />
      </Box>
    </Container>
  );
};

export default App;
