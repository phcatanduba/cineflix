import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies'
        );
        promise.then((response) => {
            setMovies(response.data);
        });
    }, []);

    return (
        <div className="movies">
            <ul>
                {movies.map((movie) => {
                    return (
                        <Link to={`/sessoes/${movie.id}`} key={movie.id}>
                            <li className="movie">
                                <img src={movie.posterURL} />
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
}
