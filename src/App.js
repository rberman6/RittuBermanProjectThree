import './App.css';
import Header from './components/Header';
import MoviePoster from './components/MoviePoster';
import Form from './components/Form';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


// GENERAL PSEUDO CODE
// 1. Page loads/mounts current "upcoming movies" in theatre on page load via an API call. Movie data will be displayed once on page load.
// 2. Another separate API call is made on page load to fetch genre categories and create a drop down menu of all the genres. 
// 3. This gives the user the option to filter the upcoming movies into categories based on genre selection following form submission.


function App() {
    // 1C. store the movie API data of "Upcoming Movies" thats fetched in state.
    const [ movieData, setMovieData ] = useState([]);
    // 1B. API call is made and will render movie data once on page load.
    useEffect(() => {
      fetchMovies();
      }, []);
    // 1A. Create a function that fetches upcoming movie data from an API. 
    const fetchMovies = () => {
      const url = new URL(`https://api.themoviedb.org/3/movie/upcoming`);
      url.search = new URLSearchParams({
      api_key: `4d17ba0490e1fa0dcff61ffcfe3e0764`,
      format: "json",
      language: 'en-US',
      page: 1,
    });

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(dataApi => {
        console.log(dataApi.results);  
        setMovieData(dataApi.results);
      })
      .catch(error => {
        console.log(error);
      });
  };
  // Map through the array of api movie data stored in movieData state and display it on the page. Key value also passed. Passed movieData via props into MoviePoster component to allow data to render on page.
  return (
    <main className="wrapper">
      <Header />
      <Form setMovieData={setMovieData}/>
      {movieData.map((movie, key) => {
        return (
          <MoviePoster  movie={movie} key={key} />
        )
      })}
      <Footer />
    </main>
  );

}

export default App;
