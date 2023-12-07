import React, { useEffect, useState } from "react";
import tmdbService from "../services/tmdbService";
import { useParams } from "react-router-dom";

interface Movie {
  id: number;
  name: string;
  overview: string;
  original_language: string;
  original_title: string;
  release_date: string;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<Movie | undefined>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // eslint-disable-next-line no-template-curly-in-string
        const response = await tmdbService.get(`/movie/${id}`);
        console.log(response);
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h2>{movieDetails?.name}</h2>
      <p>{movieDetails?.original_title}</p>
      <p>{movieDetails?.overview}</p>
      <p>{movieDetails?.original_language}</p>
      <p>{movieDetails?.release_date}</p>
    </div>
  );
};

export default MovieDetail;
