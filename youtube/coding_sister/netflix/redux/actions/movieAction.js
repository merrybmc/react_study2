import api from '../api';

export function getMovies() {
  return async (dispatch) => {
    const popularMolvieApi = await api.get('/movie/popular?api_key=<<api_key>>&language=en-US&page=1');

    // let url = ` https://api.themoviedb.org/3`;
    // let response = await fetch(url);
    // let data = await response.json();

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
    // let response2 = await fetch(url2);
    // let data2 = await response.json();

    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
    // let response3 = await fetch(url3);
    // let data3 = await response.json();
  };
}
