import { useState, useEffect } from 'react';

// Genre filter

const Form = () => {

    const [genreFilter, setGenreFilter] = useState([]);

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
            <select>

            </select>
        
        </>
    )
};

export default Form;


