import { useState } from "react";
import { getMovies } from "../utils/movieService";
import Movie from './Movie'

const Movies = () => {
    //håndtere movies state 
    const [data, setData] = useState([]);

    const klikket = async() => {
        const movies = await getMovies();
        setData(movies);
    }
    // {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
    const movieList = data.map((movie) => (
        <Movie title={movie.title} actor={movie.actor} />
    ));
    console.log(data);
    return (
        <article>
            <button onClick={klikket}>Get movies</button>
            {movieList}
        </article>
    );
};

export default Movies;