import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleAuth = () => {
    isAuthenticated ? dispatch(logout()) : dispatch(login());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Advanced To-Do App
        </Typography>
        <Button color="inherit" onClick={handleAuth}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
