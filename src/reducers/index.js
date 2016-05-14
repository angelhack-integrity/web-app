import { combineReducers } from 'redux';
import reviewState from './reviewReducer';

const rootReducer = combineReducers({
  reviewState
});

export default rootReducer;
