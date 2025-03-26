export const login = () => dispatch => {
    // Simulate login process
    dispatch({ type: 'LOGIN_SUCCESS' });
  };
  
  export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_TASKS' });
  };
  