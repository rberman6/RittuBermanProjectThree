import { useState, useEffect } from 'react';

// Genre filter pseudo code

// Create a dropdown menu for user to select genre. This data will be coming from an api
// store this api data in genreFilter state and render on page load as a drop down menu
// create an onChange event so when user selects the specifc genre, it is stored in genreSelection state
// when user clicks on submit button following genre selection another api call will be made and the movieData state will be updated and re-rendered on the page to show filtered movies based on users selected genre.

// passing props from parent app to Form component. Here we passed the setMovieData state
const Form = ( { setMovieData } ) => {

    const [genreFilter, setGenreFilter] = useState([]);
    const [genreSelection, setGenreSelection] = useState("");

    useEffect( ()=> {
        fetchGenre();
    }, []);

    // Another different API call made on page load to render genre categories
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
                setGenreFilter(response.genres);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // create an onChange event and store/update genreSelection state based on user's selection
    const handleChange = (event) => {
        setGenreSelection(event.target.value);
    }

    // Make another API call to fetch genre specific movies when user choose genre. Parameters include with_genres & the users genre selection from genreSelection state. This fetch call will only run after form submission by the user.
    const handleFilter = () => {
        const url = new URL(`https://api.themoviedb.org/3/discover/movie?`);
        url.search = new URLSearchParams({
            api_key: `4d17ba0490e1fa0dcff61ffcfe3e0764`,
            format: "json",
            language: 'en-US',
            with_genres: genreSelection,
            
        });

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(response => {
                setMovieData(response.results);
            })
            .catch(error => {
                console.log(error);
            });
    };

    // function to run after form submission (i.e. a different API call to filter movies based on users genreSelection). movieData state which is passed as props from the parent component will be updated and will re-render the filtered data.
    const handleSubmit = (event) => {
        event.preventDefault();
        if (genreSelection === "") {
        alert("Please select a category");
        } else {
        handleFilter();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="genreSelection">Filter by genre:</label>
                <select 
                    id="" 
                    name="" 
                    // value is user's selected genre as stored in genreSelection state below.
                    value={genreSelection} 
                    onChange={handleChange}>
                        {/* create a dropdown menu of the genres by mapping through the api data stored in genreFilter */}
                        <option value="" disabled>-- Please choose a category --</option>
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


