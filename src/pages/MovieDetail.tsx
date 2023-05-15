import { useParams } from "react-router-dom";
// import movie from "./movie.json";
import styles from "./MovieDetail.module.css"
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<any | null>(null);
    
    useEffect(()=>{
        if(movieId){
            get("/movie/" + movieId).then((data) => {
            setMovie(data);
        })}
    }, [movieId])

    if(!movie){
        return null;
    }
    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsList}>
            <img 
            className = {`${styles.col} ${styles.movieCover}`} src={imageUrl} alt={movie.title} />
            <div className = {`${styles.col} ${styles.movieDetails}`}>
               <p className={styles.title}><strong>Title:</strong> {movie.title}</p> 
               <p><strong>Gender:</strong> {movie.genres.map((genre: {name: string}) => genre.name).join(", ")}</p> 
               <p><strong>Description:</strong> {movie.overview}</p>
            </div>
        </div>
  )
}
