import React, { useEffect, useState } from "react";
import tmdbService from "../services/tmdbService";

interface Movie {
  id: number;
  title: string;
  overview?: string;
}

const MovieDetail: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<Movie>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // eslint-disable-next-line no-template-curly-in-string
        const response = await tmdbService.get("/movie/${id}");
        setMovieDetails(response.data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div>
      <h2>{movieDetails?.title}</h2>
      <p>{movieDetails?.overview}</p>
    </div>
  );
};

export default MovieDetail;
