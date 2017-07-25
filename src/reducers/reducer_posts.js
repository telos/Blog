import _ from 'lodash';

import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // ES5 syntax
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // ES6 syntax, brackets are using key interpolation to define the new key
      return { ...state, [action.payload.data.id]: action.payload.data };
    default:
      return state;
  }
}
