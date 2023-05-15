import { useEffect, useState } from "react";
import movies from "../../movies.json";
import { Cards } from "../cards/Cards";
import styles from "./GridStyles.module.css";
import { get } from "../../utils/httpClient";
// import { useParams } from "react-router-dom";
import {useParams} from "react-router-dom";

export const MoviesGrid = () => {

  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    get("discover/movie").then((data) =>{ 
      setMovies(data.results) 
    });
    
  }, []);
  return (
    <div>
        <ul className={styles.grid}>
            {movies.map((movie) => 
             <Cards key={movie.id} movie={movie} />
            )}
        </ul>
    </div>
  )
}
