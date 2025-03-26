import React from 'react';
import { Card, CardContent, Typography, IconButton, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';
import Grid from '@mui/material/Grid2';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const weather = useSelector(state => state.tasks.weather);
  const error = useSelector(state => state.tasks.error);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div style={{ marginTop: '16px' }}>
      {error && <Alert severity="error">{error}</Alert>}
      {tasks.map(task => (
        <Card key={task.id} sx={{ mb: 2 }}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={10}>
                <Typography variant="h6">{task.text}</Typography>
                <Typography color="text.secondary">
                  Priority: {task.priority}
                </Typography>
                {task.text.toLowerCase().includes('outdoor') && weather.hourly && (
                  <Typography color="text.secondary">
                    {console.log(weather)}
                    Current Temperature: {weather.hourly.temperature_2m[0]}°C
                  </Typography>
                )}
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={() => handleDelete(task.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;