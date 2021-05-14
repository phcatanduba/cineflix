import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Showtimes from './Showtimes';
import Seats from './Seats';
import Sucess from './Sucess';

import '../styles/reset.css';
import '../styles/style.css';
import { useState } from 'react';

export default function App() {
    const [reserve, setReserve] = useState([]);

    function reserveIt(array) {
        setReserve(array);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Main />
                </Route>
                <Route path="/sessoes/:idFilme">
                    <Showtimes />
                </Route>
                <Route path="/assentos/:idSessao">
                    <Seats reserveIt={reserveIt} />
                </Route>
                <Route path="/sucesso" exact>
                    <Sucess
                        name={reserve[0]}
                        cpf={reserve[1]}
                        seats={reserve[2]}
                        date={reserve[3]}
                        title={reserve[4]}
                        time={reserve[5]}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
