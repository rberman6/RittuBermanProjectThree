// this component will display movie poster, title, release date and short blurb of the movie.

// passed props obj into MoviePoster component
const MoviePoster = ( {movie} ) => {
    return (
        <>
            <li className="moviePosters">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Movie poster of the movie ${movie.title}`} />
            </li>
                
            <div className="movieContainer">
                <h2>{movie.title}</h2>
                <p>{movie.vote_average}</p>
                <p>{`Release date: ${movie.release_date}`}</p>
                <p>{movie.overview}</p>
            </div>
        </>
    )
};

export default MoviePoster;