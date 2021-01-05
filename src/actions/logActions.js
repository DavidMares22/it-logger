import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
  } from './types';

  export const getLogs = () => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/logs');
      const data = await res.json();
  
      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText
      });
    }
  };

  export const addLog = (log) => async dispatch => {
    try {
      setLoading();
  
      const res = await fetch('/logs',{
        method: 'POST',
        body: JSON.stringify(log),
        headers:{
          'Content-type':'application/json'
        }
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_LOG,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.data
      });
    }
  };

  // Set loading to true
export const setLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  