import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodosView  from "./views/TodosView";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodosView />
      </Provider>
    </>
  );
}

export default App;
