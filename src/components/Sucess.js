import { Link } from 'react-router-dom';
import Header from './Header';

export default function Sucess({ name, cpf, seats, date, title, time }) {
    return (
        <main>
            <Header />
            <div className="sucess">Pedido Feito com sucesso!</div>
            <div className="date infos">
                <h2>Filme e sessao</h2>
                <p>{title}</p>
                <p>{date + '-' + time}</p>
            </div>
            <div className="date infos">
                <h2>Ingressos</h2>
                {seats.map((s) => {
                    return <p key={s.name}>Assento {s.name}</p>;
                })}
            </div>
            <div className="date infos">
                <h2>Comprador</h2>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <div className="back">
                <Link to="/">
                    <button>Voltar pra Home</button>
                </Link>
            </div>
        </main>
    );
}
