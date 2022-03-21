import react, { useMemo, useState } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

function Memoized() {
    const [count, setCount] = useLocalStorage('count', 0);
    useUpdateLogger(count);
    const changeCount = () => {
        setCount((c) => c + 1);
    };
    const memoCalculation = useMemo(() => {
        return memoizedCalculation(count);
    }, [count]);

    return (
        <div className="App">
            <h1>useMemo {memoCalculation}</h1>
            <h2>customHook {count}</h2>
            <button onClick={changeCount}>+</button>
        </div>
    );
    function memoizedCalculation(num) {
        return num + 1;
    };
}

export default Memoized;
