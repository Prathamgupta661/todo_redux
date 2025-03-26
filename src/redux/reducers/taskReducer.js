const initialState = {
    tasks: [],
    weather: {},
    error: null
  };
  
  const taskReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TASK':
        return { ...state, tasks: [...state.tasks, action.payload] };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      case 'SET_WEATHER':
        return { ...state, weather: action.payload, error: null };
      case 'FETCH_WEATHER_ERROR':
        return { ...state, error: action.payload };
      case 'CLEAR_TASKS':
        return { ...state, tasks: [] };
      default:
        return state;
    }
  };
  
  export default taskReducer;