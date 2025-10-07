import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AdditionalInformation from "../components/AddionalInformation";
import { Star, Clock4, DollarSign, Award, Calendar, MoveLeft,Film } from 'lucide-react';
import axios from "axios";
import ErrorComponent from "../components/ErrorComponent";

export default function MovieDetailsPage() {
  const { id } = useParams(); // get imdbID from URL
  const [movie, setMovie] = useState<any>(null);
  const API_KEY = "e4ea8e4";
  const navigate = useNavigate();

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const res = await axios.get("https://www.omdbapi.com/", {
          params: { apikey: API_KEY, i: id, plot: "full" },
        });
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <ErrorComponent message="NO Info"/>

  return (
    
    <div className="movie-details span-3">

      <div className="back-button span-2">
        <button onClick={() => navigate(-1)}>
          <MoveLeft size={30} strokeWidth={2} />
          Back to Search
        </button>
      </div>

      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title}/>
      </div>

      <div className="gridinfo">

        <div className="headerDetails span-3">

          <h1 style={{ color: "#a42af5" }}>
            {movie.Title}
          </h1>

          <div>
            <Calendar />{movie.Year}
            <Clock4 /> {movie.Runtime}
          </div>

          <div >
            {movie.Genre.split(",").map((g: string) => (
              <span className="genre" key={g}>
                {g}
              </span>
            ))}
          </div>

        </div>

        <div className="item span-1">
          <div className="centerIcons">
            <Star color="gold" /> {movie.imdbRating}
          </div>
          <div>IMDb Rating</div>
        </div>

        <div className="item  span-1" >
          <div style={{ color: "#a42af5" }}>
            {movie.Metascore}
          </div>
          <div>Metascore</div>
        </div>

        <div className="item span-1">
          <div className="centerIcons">
            <DollarSign color="gold" />
            {movie.BoxOffice.slice(1)}
          </div>
          <div>Box Office </div>
        </div>

        <div className="item span-3">
          <h3  className="centerIcons"><Film color= "#a42af5"/>Plot</h3>
          <p>{movie.Plot}</p>
        </div>

        <div className="item span-1">
          <h3>Director</h3>
          <p>{movie.Director}</p>
        </div>

        <div className="item span-2">
          <h3>Writers</h3>
          <p>{movie.Writer}</p>
        </div>

        <div className="item span-3">
          <h3>Cast</h3>
          <p>{movie.Actors}</p>
        </div>

        <div className="item span-3" >
          <h3  className="centerIcons">
            <Award  color="gold" />
            Awards
          </h3>
          <p>{movie.Awards}</p>
        </div>

        < AdditionalInformation
          released={movie.Released}
          language={movie.Language}
          country={movie.Country}
          production={movie.Production}
        />
      </div>
    </div>
  );
}
