import React, { useState } from 'react';
import { TextField, Button, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, fetchWeather } from '../redux/actions/taskActions';
import Grid from '@mui/material/Grid2';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        text: task,
        priority
      };
      const isDuplicate = tasks.some(t => t.text === task);
      if (isDuplicate) {
        setOpen(true);
      } else {
        addNewTask(newTask);
      }
    }
  };

  const addNewTask = (newTask) => {
    dispatch(addTask(newTask));
    if (newTask.text.toLowerCase().includes('outdoor')) {
      dispatch(fetchWeather('Delhi')); // Replace 'Delhi' with a valid location
    }
    setTask('');
  };

  const handleConfirmAddTask = () => {
    const newTask = {
      id: Date.now(),
      text: task,
      priority
    };
    addNewTask(newTask);
    setOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={8}>
        <TextField 
          fullWidth
          variant="outlined"
          label="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField 
          select
          fullWidth
          variant="outlined"
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {['High', 'Medium', 'Low'].map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddTask}
          fullWidth
        >
          Add Task
        </Button>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Duplicate Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A task with the same text already exists. Do you want to add it anyway?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmAddTask} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default TaskInput;