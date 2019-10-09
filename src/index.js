import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="front">?</div>
                <div className="back">
                    <img src={"/icons/" + this.props.icon + ".png"} />
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        const icons = ['angular2', 'grunt', 'gulp', 'ionic', 'nodejs', 'react', 'vue', 'yarn'];
        let icon2s = ['grunt', 'vue', 'yarn', 'angular2', 'nodejs', 'ionic', 'react', 'gulp'];

        return (
            <div className="playground">
                {icon2s.concat(icons).map(function(icon, index) {
                    return (
                        <Card key={index} icon={icon} />
                    );
                })}
            </div>
        );
    }
}


ReactDOM.render(
    <Board />, document.getElementById('root')
)