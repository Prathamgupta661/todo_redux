export const login = () => dispatch => {
    // login
    dispatch({ type: 'LOGIN_SUCCESS' });
  };
  
  export const logout = () => dispatch => {
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_TASKS' });
  };
  