// import { useParams } from "react-router-dom";
import movieList from "./movie.json";
import styles from "./MovieDetail.module.css"
import { useEffect, useState } from "react";
// import { get } from "../utils/httpClient";
import movies from "../movies.json";
import { useParams } from "react-router-dom";


export const MovieDetail = () => {
    const { movieId }  = useParams();
    // const [movie, setMovie] = useState<any | null>(null);
    
    // useEffect(()=>{
    //     if(movieId){
    //         get("/film/" + movieId).then((data) => {
    //         setMovie(data);
    //     })}
    // }, [movieId])

    // if(!movie){
    //     return null;
    // }

    const movie = movies.find(x => x.id === Number(movieId));
    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsList}>
            <img 
            className = {`${styles.col} ${styles.movieCover}`} src={imageUrl} alt={movie.title} />
            <div className = {`${styles.col} ${styles.movieDetails}`}>
               <p className={styles.title}><strong>Title:</strong> {movie.title}</p> 
               {/* <p><strong>Gender:</strong> {movie.genres.map((genre: {name: string}) => genre.name).join(", ")}</p>  */}
               <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
  )
}
