import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
​
class Card extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             flipped: false
         }
    }
​
    // flipCard() {
    //     this.setState({
    //         flipped: !this.state.flipped
    //     })
    // }
​
    render() {
        let flipped = this.props.isOpenedCard() || this.props.isMatchedCard() ? " opened" : "";
​
        return (
            <div className={"card" + flipped} onClick={() => this.props.flipCard()}>
                <div className="front">?</div>
                <div className="back">
                    <img src={"/icons/" + this.props.icon + ".png"} />
                </div>
            </div>
        );
    }
}
​
class Board extends React.Component {
    constructor(props) {
        super(props);
​
        this.state = {
            arrayOpened: [],
            arrayMatched: [],
            icons: [
                'angular2', 'grunt', 'gulp', 'ionic', 'nodejs', 'react', 'vue', 'yarn',
                'grunt', 'vue', 'yarn', 'angular2', 'nodejs', 'ionic', 'react', 'gulp'
            ]
        }
    }
​
    flipCard(index) {
        let newArrOpened = this.state.arrayOpened.slice();
        let newArrMatched = this.state.arrayMatched.slice();
​
        if (newArrOpened.length === 2) {
            newArrOpened = [];
        }
​
        newArrOpened.push(index);
​
        if (newArrOpened.length === 2) {
            let matched = this.state.icons[newArrOpened[0]] === this.state.icons[newArrOpened[1]];
​
            if (matched) {
                newArrMatched = newArrMatched.concat(newArrOpened);
            }
        }
​
        this.setState({
            arrayOpened: newArrOpened,
            arrayMatched: newArrMatched
        })
    }
​
    isOpenedCard(index) {
        return this.state.arrayOpened.includes(index);
    }
​
    isMatchedCard(index) {
        return this.state.arrayMatched.includes(index);
    }
​
    render() {
​
        let board = this;
        return (
            <div className="playground">
                {this.state.icons.map(function(icon, index) {
                    return (
                        <Card key={index} icon={icon}
                              flipCard={() => board.flipCard(index)}
                              isOpenedCard={() => board.isOpenedCard(index)}
                              isMatchedCard={() => board.isMatchedCard(index)}
                        />
                    );
                })}
            </div>
        );
    }
}
​
​
ReactDOM.render(
    <Board />, document.getElementById('root')
)