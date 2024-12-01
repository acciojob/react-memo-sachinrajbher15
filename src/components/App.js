import React, { useState } from 'react'
import ReactMemo from './ReactMemo'
import UseMemo from './UseMemo'
function App() {

    const handleAddTaskClick = () => {
        const newTaks = document.getElementById('newTodo');
        newTaks.innerHTML = "New Todo";
    }

    const [count, setCount] = useState(0);
    const handleCounterClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <h1>React.useMemo</h1>
            <div className='todo-container'>
                <h1>My todos</h1>
                <p id="newTodo"></p>
                <button onClick={handleAddTaskClick}>Add Todo</button>
            </div>
            <div className='counter-section'>
                <p>Count: {count}</p>
                <button onClick={handleCounterClick}>+</button>
            </div>
            <div>
                <h1>Expensive Calculation</h1>
                <p>1000000000</p>
            </div>
            <ReactMemo />
            <UseMemo />
        </div>
    )
}

export default App


