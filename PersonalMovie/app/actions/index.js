import imdb from 'imdb-api'

const findMovie = (title) => {
    return {
        type: 'FIND_MOVIE',
        payload: imdb
                    .get(title)
                    .then(data => data)
    }
}

export default findMovie