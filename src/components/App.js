import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Showtimes from './Showtimes';

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
            </Switch>
        </BrowserRouter>
    );
}
