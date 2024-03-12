import React, { useState } from 'react';

const ExerciseFour = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExerciseFour;
