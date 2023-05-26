// this component will display movie poster, title, release date and short blurb

const MoviePoster =  ( {movie} ) => {
   
    return (
        <>
            
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
        </>
    )
};

export default MoviePoster;