import react, { useMemo, useState } from 'react'
import './App.css';

function Memoized() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount((c) => c + 1)
  }
  const memoCalculation = useMemo(() => {
    return memoizedCalculation(count)
  }, [count]);

  return (
    <div className="App">
      <h1>useMemo {memoCalculation}</h1>
      <button onClick={changeCount}>+</button>
    </div>
  );
  function memoizedCalculation(num) {
    return num + 1
  }
}

export default Memoized;
