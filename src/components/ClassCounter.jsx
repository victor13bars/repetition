import React, {useState} from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                {/*<h1>{text}</h1>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    value={text}*/}
                {/*    onChange={event => setText(event.currentTarget.value)}*/}
                {/*/>*/}
                <button onClick={this.increment}>Увеличить</button>
                <button onClick={this.decrement}>Уменьшить</button>
            </div>
        )
    }
}

export default ClassCounter