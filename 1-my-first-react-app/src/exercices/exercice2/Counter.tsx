import { useState } from "react";
  

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Compteur: {count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;