import { combineReducers } from 'redux';
import UIReducer from './UIReducer';
import Request from './Request';

const rootReducer = combineReducers({
  UIReducer,
  Request
});

export default rootReducer;
