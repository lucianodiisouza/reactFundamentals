import React from 'react'
import ReactDOM from 'react-dom';

const Contador = () => {
    const [ valor, setValor ] = React.useState(0);
    React.useEffect(() => {
        console.log('use Effect')
    })
    return(
        <div>
            <h1>{valor}</h1>
        </div>
    );
};

// class Contador extends React.Component {
//     state = {
//         valor: 0
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => {
//             this.setState(s => ({
//                 valor: s.valor + 1
//             }));
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log(prevState.valor, this.state.valor);
//     }

//     render() {
//         return(
//             <div>
//                 <h1> {this.state.valor} </h1>
//             </div>
//         )
//     }
// }

const App = () => {
    const [
        mostrarContador,
        setMostrarContador
     ] = React.useState(true);
     const toggleMostrador = () => {
        setMostrarContador(ant => !ant);
     }

     if (!mostrarContador) {
        return (
            <div>
                <input 
                type="checkbox" 
                checked={mostrarContador} 
                onChange={toggleMostrador} />
            </div>
        );
    }else{
        return (
            <div>
                <input 
                type="checkbox"
                checked={ mostrarContador}
                onChange={toggleMostrador} />
                <Contador />
            </div>
        );
    }

};

// export default class App extends React.Component {
//     state = {
//         mostrarContador: true
//     };

//     toggleMostrador = () => {
//         this.setState(s => ({
//             mostrarContador: !s.mostrarContador
//         }));
//     };

//     render() {

//     }
// }