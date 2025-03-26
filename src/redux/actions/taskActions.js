export const addTask = (task) => dispatch => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  };
  
  export const deleteTask = (taskId) => dispatch => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskId
    });
  };
  
  export const fetchWeather = (location) => async dispatch => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      dispatch({
        type: 'SET_WEATHER',
        payload: data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_WEATHER_ERROR',
        payload: error.message
      });
    }
  };