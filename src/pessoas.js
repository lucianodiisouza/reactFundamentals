import React from 'react';
import ReactDOM from 'react-dom';

const pessoas = [
    {
        id: 1,
        nome: 'Camila'
    },
    {
        id: 2,
        nome: 'Luciano'
    },
    {
        id: 3,
        nome: 'Bernardo'
    },
    {
        id: 4,
        nome: 'Lorenzo'
    },
    {
        id: 5,
        nome: 'Luana'
    },
    {
        id: 6,
        nome: 'Optimus Prime'
    }
];

const Pessoa = (p) => (
    <li>{p.id} - {p.nome}</li>
);


const App = () => (
    <ul>
        {pessoas.map(p => (
            <Pessoa key={p.id.toString()} id={ p.id}  nome={p.nome} />
        ))}
    </ul>
);

export default App;