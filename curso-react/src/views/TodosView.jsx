import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import todoActions from "../slicers/todosSlicer";

const TodosView = () => {
  const listaDeTodos = useSelector((store) => {
    console.log("STORE",store)
    return  store.todos.todoList
  });
  const dispatch = useDispatch();
  const handlerAddTodo = () => {
    console.log("HANDLING NEW TODO")
    dispatch(todoActions.agregarTodo("Nuevo Todo"));
  };
  return (
    <>
      <Todos todos={listaDeTodos} addTodo={handlerAddTodo} />
    </>
  );
};

export default TodosView;
