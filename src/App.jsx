import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="app">
            <div className="header">
                <p className="assignment">FSD LAB ASSIGNMENT 06</p>
                <h1>React Counter App</h1>
                <p className="subtitle">
                    A simple counter powered by React useState.
                </p>
            </div>

            <div className="counter-card">
                <p className="counter-label">CURRENT COUNT</p>

                <div className="count">{count}</div>

                <div className="button-group">
                    <button className="decrement-btn" onClick={decrement}>
                        − Decrement
                    </button>

                    <button className="reset-btn" onClick={reset}>
                        ↻ Reset
                    </button>

                    <button className="increment-btn" onClick={increment}>
                        + Increment
                    </button>
                </div>

                <p className="hint">
                    Click the buttons to change the counter.
                </p>
            </div>
        </div>
    );
}

export default App;