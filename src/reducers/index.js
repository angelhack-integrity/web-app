import { combineReducers, applyMiddleware } from 'redux';
import reviewState from './reviewReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   reviewState,
   applyMiddleware(thunk)
});

export default rootReducer;
