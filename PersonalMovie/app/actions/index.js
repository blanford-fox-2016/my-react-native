// import imdb from 'imdb-api'
// console.log(imdb)

export const findMovie = (title) => {
  return dispatch => {
    return fetch(`http://www.omdbapi.com/?t=${title}`)
        .then((response) => response.json())
        .then((responseText) => {
          console.log('response text', responseText)
        dispatch(sendMovie(responseText));
        })
        .catch((error) => {
        console.warn(error);
        })
  }
}

export const sendMovie = (movie) => {
 return {
   type: 'FIND_MOVIE',
   payload: movie
 }
}
