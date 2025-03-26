import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <Header />
      <Container sx={{ mt: 4 }}>
        {isAuthenticated ? (
          <>
            <TaskInput />
            <TaskList />
          </>
        ) : (
          <Typography variant="h5" align="center">
            Please login to manage your tasks.
          </Typography>
        )}
      </Container>
    </div>
  );
};

export default App;