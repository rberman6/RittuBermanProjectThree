import './App.css';
import Header from './Header';
import axios from 'axios';
import { useEffect } from 'react';

// PSEUDO CODE
// 1. Page loads/mounts with button "Upcoming Movies" and separate dropdown menu nested inside form to filter movies by genre.
// 2. User clicks on button which runs an event
// 3. This event vent makes API call
// 4. API movie data returned will be stored in state
// 5. API data (poster, title, short blurb, release date) will render on page
// 7. User can filter movie data by genre
// 8. users selects genre from drop down menu and click on submit. an onChange function runs to filter the movies based on users selected genre.
// 9. User has option to clear the movie data

function App() {
  // create a function that gets Movie data (poster, title etc.)
  useEffect(() => {
    const apiKey = `4d17ba0490e1fa0dcff61ffcfe3e0764`;
    axios ({
      // url: "https://api.themoviedb.org/3/movie/top_rated",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: apiKey,
        format: "json",
        language: 'en-US',
        page: 1,
      },
    }).then((dataApi) => {
      console.log(dataApi);
      console.log(dataApi.data.results);
     
    });
  });


  return (
    <main className="wrapper">
      <Header />
    </main>
  );
}

export default App;
