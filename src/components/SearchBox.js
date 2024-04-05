import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Assuming your API returns the full details of a single movie for a given title
      const response = await fetch(` https://video-store-ffd8896e8ec4.herokuapp.com/api/movies/search?title=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const data = await response.json();

      if (data && data.length > 0) {
        console.log("Full movie data:", data[0]); // Logging the first movie data
        navigate(`/movie-details/${data[0].id}`); // Navigate to movie details page
      } else {
        console.log("No movie found for the search query");
      }
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
