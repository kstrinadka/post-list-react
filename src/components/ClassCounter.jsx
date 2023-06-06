import React from 'react';


// тут состояние реализовано иначе и хуки использовать нельзя
// это устаревший подход для создания компонентов
class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button className="incrBut" onClick={this.increment}>
                    +1
                </button>
                <button className="decrBut" onClick={this.decrement}>
                    -1
                </button>
            </div>
        );
    }
}

export default ClassCounter;
