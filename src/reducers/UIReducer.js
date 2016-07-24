import { IS_FETCHING } from '../actions/types';

const UIReducer = (state = {}, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetching: action.bool };
    default:
      return state;
    }
};

export default UIReducer;
