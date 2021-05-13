import Header from './Header';
import Instruction from './Instruction';
import DateButton from './DateButton';
import MovieInfo from './MovieInfo';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function Showtimes() {
    const { idFilme } = useParams();
    const [calendary, setCalendary] = useState([]);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`
        );
        promise.then((response) => {
            setCalendary(response.data.days);
            setMovieSelected(response.data);
        });
    }, []);
    if (calendary.length === 0) {
        return <main>Carregando...</main>;
    }
    return (
        <main>
            <Header />
            <Instruction text="Selecione o horário" />
            {calendary.map((i) => {
                return (
                    <div className="date" key={i.id}>
                        <div>
                            {i.weekday} - {i.date}
                        </div>
                        <DateButton time={i.showtimes} />
                    </div>
                );
            })}
            <MovieInfo movie={movieSelected} />
        </main>
    );
}
