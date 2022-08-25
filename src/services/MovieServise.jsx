

export default class MovieService {

    _APIKEY = 'e0ec4c232335ffc08d42a11556a54ec5';  
    IMAGEPATH = 'https://image.tmdb.org/t/p/w500/';

    getMovies = async () => {
      const res = await  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this._APIKEY}&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
      const movies = await res.json()
      console.log(movies);
      return movies.results.slice(0,18).map((movie) => this.transformMovie(movie))
    }

   #getGenres(genresId){
    const genres = [{"id":28,"name":"боевик"},{"id":12,"name":"приключения"},{"id":16,"name":"мультфильм"},{"id":35,"name":"комедия"},{"id":80,"name":"криминал"},{"id":99,"name":"документальный"},{"id":18,"name":"драма"},{"id":10751,"name":"семейный"},{"id":14,"name":"фэнтези"},{"id":36,"name":"история"},{"id":27,"name":"ужасы"},{"id":10402,"name":"музыка"},{"id":9648,"name":"детектив"},{"id":10749,"name":"мелодрама"},{"id":878,"name":"фантастика"},{"id":10770,"name":"телевизионный фильм"},{"id":53,"name":"триллер"},{"id":10752,"name":"военный"},{"id":37,"name":"вестерн"}]
    let genresAll = [];
    for (let genreId of genresId){
     genresAll.push(genres.find((genre)=>genre.id === genreId).name);
    }
    return genresAll.join(', ')
    }

    transformMovie = (movie) => {
        return {
            id:movie.id,
            title: movie.title,
            genres: this.#getGenres(movie.genre_ids),
            poster: this.IMAGEPATH + movie.poster_path,
            releaseDate: movie.release_date
        }
    }
}
