import * as types from '../constants/actionTypes';

export function saveReview(settings) {
  return {type: types.SAVE_REVIEW, settings};
}

export function listReviews(settings) {
	return {type: types.LIST_REVIEWS, settings};
}
