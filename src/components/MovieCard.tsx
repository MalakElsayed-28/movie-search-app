import { Link } from "react-router-dom";
interface MovieCardProps {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
}

export default function MovieCard({ imdbID, title, year, poster }: MovieCardProps) {

  return (
    <div className="Griditem" key={imdbID}>
      <Link to={`/movie/${imdbID}`} style={{ textDecoration: "none" }}>
        <img src={poster} alt={title} />
        <p style={{ color: "white" }}><strong>{title}</strong> <br />({year})</p>
      </Link>
    </div>
  );
}

