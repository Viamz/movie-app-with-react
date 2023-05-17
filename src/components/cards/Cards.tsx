import { NavLink } from "react-router-dom";
import styles from "./CardStyles.module.css";

export const Cards = ({movie}) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
      <li className= {styles.card}>
        <NavLink to={"/movies/" + movie.id.toString()}>
          <img 
          width={230}
          height = {345}
          className = {styles.cardImage}
          src={imageUrl}
          alt={movie.title} />
          <div>{movie.title}</div>
        </NavLink>      
      </li>
 )
}
