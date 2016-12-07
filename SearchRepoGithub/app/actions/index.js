import * as types from '../constants/ActionTypes'

export function searchRepoProcess(keyword){
  return dispatch => {
    dispatch(searchRepo(keyword));
    fetch('https://api.github.com/search/repositories?q='+keyword)
      .then((response) => response.json())
      .then((responseJson) => {
        // Store the results in the state variable results and set loading to
        // false to remove the spinner and display the list of repositories
        // return({
        //   type: types.SEARCH_REPO_SUCCESS,
        //   payload: responseJson
        // })
        // return responseJson.Search;
        console.log('ini response (harusnya)' + JSON.stringify(responseJson.items[0]));
        dispatch(searchRepoSucces(responseJson));
      })
      .catch((error) => {
        console.log(error);
        dispatch(searchRepoFailure())
      })
  }
}

export function searchRepoSucces(payload){
  console.log('ini success ' + JSON.stringify(payload.items[0]));
  return({
    type: types.SEARCH_REPO_SUCCESS,
    payload: payload
  })
}

export function searchRepoFailure(error) {
  console.log('ini errror ' + error);
  return({
    type: types.SEARCH_REPO_FAILURE,
    payload: error
  })
}

export function searchRepo(payload) {
  console.log('ini proccess ' + payload);
  return({
    type: types.SEARCH_REPO,
    payload: payload
  })
}
