import { useState, useEffect } from 'react';

// Genre filter

const Form = () => {

    const [genreFilter, setGenreFilter] = useState([]);
    const [genreSelection, setGenreSelection] = useState("");

    useEffect( ()=> {
        fetchGenre();
    }, []);

    const fetchGenre = () => {
        const url = new URL(` https://api.themoviedb.org/3/genre/movie/list`);
        url.search = new URLSearchParams({
            api_key: `4d17ba0490e1fa0dcff61ffcfe3e0764`,
            format: "json",
            language: 'en-US',
        });

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(response => {
                console.log(response.genres);
                setGenreFilter(response.genres);
            })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <>
            <form>
                <label htmlFor="genreSelection">Filter by genre:</label>
                <select id="" name="">
                    <option value="default" disabled>--Please choose a category--</option>
                    {genreFilter.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        )
                    }) }
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
};

export default Form;


