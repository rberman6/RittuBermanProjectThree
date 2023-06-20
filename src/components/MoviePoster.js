// this component will display movie poster, title, release date and short blurb of the movie.

// passed props obj into MoviePoster component
const MoviePoster = ( {movie} ) => {
    return (
        <ul>
            <li className="moviePosters">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Movie poster of the movie ${movie.title}`} />
                <div className="movieContainer">
                    <h2 className="movieTitle">{movie.title}</h2>
                    <div className="iconRating">
                        <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.4 204" width="30px" height="30px"><polygon points="176.7 202.6 109.6 168.6 43.3 204 54.8 130.6 0 78.9 75 67.3 107.5 0 141.4 66.6 216.4 76.2 163 129.2 176.7 202.6" fill="#ffa96e" /></svg>
                        <p>{movie.vote_average}</p>
                    </div>
                    <p>{`Release date: ${movie.release_date}`}</p>
                    <p className="movieBlurb">{movie.overview}</p>
                </div>
            </li>
        </ul>
    )
};

export default MoviePoster;