import { MoviesGrid } from "./components/moviegrid/MoviesGrid";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink 
} from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { LandingPage } from "./pages/LandingPage";


export const App = () => {
  return (
    <div>
      <Router>
        <header>
          <nav>Menu</nav>
          <NavLink to="/">
            <h1 className={styles.title}>Cinema Movies</h1>
          </NavLink>
        </header>
          <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
          </main>
      </Router>
      
    </div>
  )
}
