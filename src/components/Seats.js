import Header from './Header';
import Instruction from './Instruction';
import MovieInfo from './MovieInfo';
import Reserve from './Reserve';
import Example from './Example';
import ShopperInfo from './ShopperInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Seats() {
    const { idSessao } = useParams();
    const [weekday, setWeekday] = useState('');
    const [time, setTime] = useState('');
    const [movie, setMovie] = useState({});
    const [seats, setSeats] = useState([]);
    const [selected, setSelected] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((response) => {
            setWeekday(response.data.day.weekday);
            setTime(response.data.name);
            setMovie(response.data.movie);
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

    /* PROCURAR UM JEITO MENOS ESQUISITO DE RESOLVER ISSO DEPOIS */

    function selectAndDeselect(s) {
        if (s.class !== 'selected' || s.class === undefined) {
            s.class = 'selected';
            setSelected(Math.random());
        } else if (s.class === 'selected') {
            s.class = '';
            setSelected(Math.random());
        }
    }

    /*------------------------------------------------------*/

    return (
        <main>
            <Header />
            <Instruction text="Selecione o(s) assento(s)" />
            {rowsSeats.map((row, i) => {
                return (
                    <ul className="seats" key={i}>
                        {row.map((s, j) => {
                            return (
                                <li
                                    className={`seat ${s.class} ${
                                        s.isAvailable ? '' : 'not-avaliable'
                                    }`}
                                    key={s.id}
                                    onClick={() => {
                                        if (!s.isAvailable) {
                                            alert(
                                                'Esse assento não está disponível'
                                            );
                                        } else {
                                            selectAndDeselect(s);
                                        }
                                    }}
                                >
                                    {i === 0 && j < 9 ? '0' + s.name : s.name}
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
            <Example />
            <ShopperInfo
                name={name}
                cpf={cpf}
                setName={setName}
                setCpf={setCpf}
            />
            <Reserve name={name} cpf={cpf} />
            <MovieInfo movie={movie} date={weekday + ' - ' + time} />
        </main>
    );
}
