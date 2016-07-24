import { FETCH_DATA } from '../actions/types';

const Request = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default Request;
