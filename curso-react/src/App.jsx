import { useCallback, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Timer from "./components/Timer";
import RoundTimer from "./components/RoundTimer";
import TimerHoC from "./components/HoC";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t) => [...t, "new todo"]);
  // };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />

      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
