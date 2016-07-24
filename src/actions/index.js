import {
  IS_FETCHING,
  FETCHING,
  FETCH_DATA
} from './types';
import axios from 'axios';

const dispatcher = (dispatch, url) => {
  dispatch({ type: IS_FETCHING, bool: true });
  axios.get(url)
    .then(response => {
      const data = response.data.search;
      dispatch({ type: IS_FETCHING, bool: false });
      dispatch({ type: FETCH_DATA, data});
    }).catch(response => {
      console.log(response)
    });
}

export const fetchData = url => (
  function (dispatch) {
    dispatcher(dispatch, url);
  }
);
