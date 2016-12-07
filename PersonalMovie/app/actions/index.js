// import imdb from 'imdb-api'
// console.log(imdb)

// export async function findMovie(title){
//   try {
//      let response = await fetch(`http://www.omdbapi.com/?t=${title}`);
//      let responseJson = await response.json();
//      return responseJson;
//    } catch(error) {
//      console.error(error);
//    }
//  }

// export const findMovie = (title) => {
//     return {
//         type: 'FIND_MOVIE',
//         payload: fetch(`http://www.omdbapi.com/?t=${title}`)
//           .then((response) => response.json())
//           .then((responseText) => {
//           return responseText;
//           })
//           .catch((error) => {
//           console.warn(error);
//           })
//     }
// }

// console.log('test', imdb.get('Batman').then(data => console.log(data)))
// console.log(findMovie('Batman'))


// Ken Duigraha Putra [3:35 PM]
// let getInfo = (symbol) => {
//  return dispatch => {
//    fetch(`https://www.quandl.com/api/v3/datasets/YAHOO/${symbol}.json?api_key=pi3Y6BmviWf9g-zgyWRk`)
//    .then((response) => response.json())
//    .then((responseJson) => {
//      // console.log(responseJson);
//      console.log(`test`);
//      dispatch(getInfoSuccess(responseJson))
//    })
//    .catch((error) => {
//      console.error(error);
//      getInfoFailure()
//    });
//  }
// }

export const findMovie = (title) => {
  return dispatch => {
      console.log(`http://www.omdbapi.com/?t=${title}`)
      fetch(`http://www.omdbapi.com/?t=${title}`)
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
