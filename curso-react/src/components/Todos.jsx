import { memo, useMemo } from "react";

const expensiveFunc = () => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum++;
  }
  return sum;
};

const Todos = ({ todos, addTodo }) => {
  console.log("RENDER CHILD");


  const value = useMemo(() => expensiveFunc(), [todos]);

//   console.log("VAL", value);
  return (
    <>
      <h2>My TOdos</h2>
      {todos.map((todo, index) => {
        return <p key={index.toString()}>{todo}</p>;
      })}

      <button onClick={addTodo}>Add todo</button>
    </>
  );
};

export default memo(Todos);
