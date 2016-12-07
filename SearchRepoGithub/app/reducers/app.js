import { SEARCH_REPO, SEARCH_REPO_SUCCESS, SEARCH_REPO_FAILURE } from '../constants/ActionTypes'
const initialState = []

export default function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO :
      return action.payload
    case SEARCH_REPO_SUCCESS :
      console.log('udah sampai reducer nih : ' + JSON.stringify(action.payload));
      return action.payload
    case SEARCH_REPO_FAILURE :
      return state
    default :
      return state
  }
}
