import * as types from '../constants/actionTypes';

export function saveReview(settings) {
  return {type: types.SAVE_REVIEW, settings};
}
