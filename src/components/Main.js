import Header from './Header';
import Instruction from './Instruction';
import Movies from './Movies';

export default function Main() {
    return (
        <main>
            <Header />
            <Instruction text="Selecione o filme" />
            <Movies />
        </main>
    );
}
