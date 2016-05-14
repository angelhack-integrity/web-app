import * as types from '../constants/actionTypes';

export function saveReview(settings) {
  return {type: types.SUBMIT_REVIEW, settings};
}
