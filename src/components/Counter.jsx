import React, {useState} from 'react';

const Counter = () => {
    let [count, setCount] = useState(5);
    // let [text, setText] = useState("Всё у тебя получится");
    const increment = () => {
        setCount(value => value + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            {/*<h1>{text}</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={text}*/}
            {/*    onChange={event => setText(event.currentTarget.value)}*/}
            {/*/>*/}
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </div>
    );
};

export default Counter;