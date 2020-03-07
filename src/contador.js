import React from 'react'
import ReactDOM from 'react-dom';

class Resultado extends React.Component {
    render() {
        return(
        <h1> {this.props.resultado} </h1>
        );
    }
}
class Contador extends React.Component {
    state = {
        valor: 0
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState(s => ({
                valor: s.valor + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState.valor, this.state.valor);
    }

    render() {
    return <div><Resultado resultado={ this.state.valor } /></div>;
    }
}

export default class App extends React.Component {
    state = {
        mostrarContador: true
    };

    toggleMostrador = () => {
        this.setState(s => ({
            mostrarContador: !s.mostrarContador
        }));
    };

    render() {
        if (!this.state.mostrarContador) {
            return (
                <div>
                    <input 
                    type="checkbox" 
                    checked={this.state.mostrarContador} 
                    onChange={this.toggleMostrador} />
                </div>
            );
        }else{
            return (
                <div>
                    <input 
                    type="checkbox"
                    checked={ this.state.mostrarContador}
                    onChange={this.toggleMostrador} />
                    <Contador />
                </div>
            );
        }
    }
}