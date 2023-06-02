// this component will display movie poster, title, release date and short blurb of the movie.

// passed props obj into MoviePoster component
const MoviePoster = ( {movie} ) => {
    return (
        <>
            <div className="movieContainer">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`Movie poster of the movie ${movie.title}`} />
                <h2>{movie.title}</h2>
                <p>{`Release date: ${movie.release_date}`}</p>
            </div>
            <div className="movieBlurb">
                <p>{movie.overview}</p>
            </div>
        </>
    )
};

export default MoviePoster;