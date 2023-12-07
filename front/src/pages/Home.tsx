import React, { useEffect, useState } from "react";
import tmdbService from "../services/tmdbService";

interface Movie {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await tmdbService.get("/movie/upcoming");
        setUpcomingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <ul>
        {upcomingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
