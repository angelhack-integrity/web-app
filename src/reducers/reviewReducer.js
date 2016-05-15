import {SAVE_REVIEW, LIST_REVIEWS} from '../constants/actionTypes';
import initialState from './initialState';
import haveOnDemand from './haveOnDemand';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function reviewReducer(state = initialState.reviewState, action) {
  let newState;

  switch (action.type) {
    case SAVE_REVIEW:
      return haveOnDemand.saveReview(state);

    case LIST_REVIEWS:
    	return haveOnDemand.list();
  
    default:
      return state; 
  }
}
