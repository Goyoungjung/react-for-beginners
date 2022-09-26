import { useState, useEffect } from "react";
import Movie from "../componests/Moive";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await fetch(
      "https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year"
    );
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movie.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              corverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
