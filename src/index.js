import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Platzi extends React.Component {
    state = {
        texto: 'Oi'
    }
    
    handleButtonClick = () => {
        this.setState(previousState => {
            return {
                texto: 
                    previousState.texto === 'Oi'
                        ? 'Tchau'
                        : 'Oi'
            };
        });
    }; 

    render() {
        return(
            <div>
                <h3 className="platzi"> { this.state.texto} {this.props.nome}</h3>
                <button onClick={ this.handleButtonClick }>Mudar estado</button>
            </div>

        );
    }
}

ReactDOM.render(
    <div>
        <Platzi nome="Camila" />
        <Platzi nome="Luciano" />
    </div>
,
    document.getElementById('root')
);
