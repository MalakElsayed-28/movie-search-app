import Header from "../components/Header.tsx";
import Movies from "../components/Movies.tsx";
import StartSearch from "../components/StartSearch.tsx";
import SearchInput from "../components/SearchInput.tsx";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import ErrorComponent from "../components/ErrorComponent.tsx";
import useDebounce from "../hooks/useDebounce.tsx";

export default function HomePage() {
  
  const [movies, setMovies] = useState<any[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const query = searchParams.get("q") || "";
  const debouncedQuery = useDebounce(query, 500);
  const [error, setError]=useState(false);
  
    useEffect(() => {
    if (!debouncedQuery.trim()) {
      setMovies([]);
      setError(false);
      return;
    }
    searchMovies(debouncedQuery);
  }, [debouncedQuery]);

  const searchMovies = async (q: string) => {
    try {
      const res = await axios.get("https://www.omdbapi.com/", {params: { apikey: API_KEY, s: q }});
      if (res.data.Search) {
        setMovies(res.data.Search || []);
      } else {
        setMovies([]);
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
      setError(true);
    }
  };
  return (
    <>
      <Header />
      <SearchInput query={query} setQuery={(val: string) => setSearchParams({ q: val })}  />  
      {!query ? (
        <StartSearch />
      ) : error ? (
        <ErrorComponent message="No movies found. Try another search." />
      ) : (
        <Movies movies={movies} />
      )}
    </>
  );
}