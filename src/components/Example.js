export default function Example() {
    return (
        <div className="example">
            <ul className="seats">
                <div>
                    <li className="seat selected"></li>
                    <p>Selecionado</p>
                </div>
                <div>
                    <li className="seat"></li>
                    <p>Disponivel</p>
                </div>
                <div>
                    <li className="seat not-avaliable"></li>
                    <p>Indisponivel</p>
                </div>
            </ul>
        </div>
    );
}
