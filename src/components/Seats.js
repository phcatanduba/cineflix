import Header from './Header';
import Instruction from './Instruction';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Seats() {
    const { idSessao } = useParams();
    const [movie, setMovie] = useState({});
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((response) => {
            setMovie(response.data);
            setSeats(response.data.seats);
        });
    }, []);

    let rowsSeats = [[], [], [], [], []];
    let j = 0;
    for (let i = 0; i < 5; i++) {
        for (j; j < seats.length; j++) {
            rowsSeats[i].push(seats[j]);
            if ((j + 1) % 10 === 0 && j !== 0) {
                j++;
                break;
            }
        }
    }
    console.log(seats);
    console.log(rowsSeats);
    return (
        <main>
            <Header />
            <Instruction text="Selecione o(s) assento(s)" />
            {rowsSeats.map((row, i) => {
                return (
                    <ul className="seats" key={i}>
                        {row.map((s) => {
                            return (
                                <li
                                    className={`seat ${
                                        s.isAvaliable
                                            ? 'avaliable'
                                            : 'notAvaliable'
                                    }`}
                                    key={s.id}
                                >
                                    {s.name}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </main>
    );
}
