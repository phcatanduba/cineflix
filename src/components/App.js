import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Showtimes from './Showtimes';
import Seats from './Seats';

import '../styles/reset.css';
import '../styles/style.css';

export default function App() {
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
                    <Seats />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
