import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routing/AppRouter";

import { Home } from "./views/Home";
import Products from "./views/Products";
import store from "./store";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
