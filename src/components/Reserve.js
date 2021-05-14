import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Reserve({
    name,
    cpf,
    seats,
    date,
    time,
    title,
    reserveIt,
}) {
    let seatsSelected = [];
    seats.forEach((row) => {
        row.forEach((seat) => {
            if (seat.class === 'selected') {
                seatsSelected.push(seat);
            }
        });
    });

    let seatsId = [];
    seatsSelected.forEach((seats) => {
        seatsId.push(seats.id);
    });

    const seatsReserve = {
        ids: seatsId,
        name: name,
        cpf: cpf,
    };

    function doReserve() {
        reserveIt([name, cpf, seatsSelected, date, title, time]);
        axios.post(
            'https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many',
            seatsReserve
        );
    }

    return (
        <div className="reserve">
            <Link to="/sucesso">
                <button
                    onClick={() => {
                        doReserve();
                    }}
                >
                    Reservar assento(s)
                </button>
            </Link>
        </div>
    );
}
