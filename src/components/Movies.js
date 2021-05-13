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
                        <li className="movie" key={movie.id}>
                            <Link to={`/sessoes/${movie.id}`}>
                                <img src={movie.posterURL} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
