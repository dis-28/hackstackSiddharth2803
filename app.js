const api_key = 'api_key=9e7aeee8fa3717047ae2072612778231';
const baseURL = 'https://api.themoviedb.org/3';
const fullURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e7aeee8fa3717047ae2072612778231';
const imgURL = 'https://image.tmdb.org/t/p/w500';
const searchURL = baseURL + '/search/movie?' + api_key;


const poster = document.querySelector('#poster');
let movieList = '';
const getmovies = (url) => {
    fetch(url).then(res => res.json()).then(data => {
        const allMovies = data.results;
        movieList = allMovies;
        const posterPath = 'https://image.tmdb.org/t/p/w500';
        for (let i = 0; i < 20; i++) {
            const imgPath = posterPath + allMovies[i].poster_path;
            const img = document.createElement('IMG');
            img.src = imgPath;
            poster.append(img);
        }
    })
}

getmovies(fullURL);


const form = document.querySelector('#MovieSearch');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = form.elements.MovieName.value;
    const rating = parseInt(searchTerm);
    poster.style.display = 'none';
    filtered.style.display = '2000px';
    const posterPath = 'https://image.tmdb.org/t/p/w500';
    for (let i = 0; i < 20; i++) {
        const movieRating = parseInt(movieList[i].vote_average);
        if (movieRating >= rating) {
            const imgPath = posterPath + movieList[i].poster_path;
            const img = document.createElement('IMG');
            img.src = imgPath;
            filtered.append(img);
        }
    }

})