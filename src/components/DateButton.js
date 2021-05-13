import { Link } from 'react-router-dom';

export default function DateButton({ time }) {
    return (
        <div className="buttons">
            {time.map((showtime) => {
                return (
                    <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                        <button className="time-button" key={showtime.id}>
                            {showtime.name}{' '}
                        </button>
                    </Link>
                );
            })}
        </div>
    );
}
