import React, { useContext, useEffect, useState } from "react";
import "./App.css";

//Contador.jsx
const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Cantidad de clicks:</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        {contador}
      </button>
    </div>
  );
};

const UserContext = React.createContext();

//Encabezado.jsx
const Encabezado = () => {
  const user = useContext(UserContext);

  // useEffect(() => {
  //   console.log("contexto");
  //   console.log(user);
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>bienvenido</h1>
      <button
        onClick={() => {
          console.log("USUARIO");
        }}
        style={{ borderRadius: 40 }}
      >
        <img width={40} height={40} src={user.imagen} />
      </button>
    </div>
  );
};

function App() {
  const user = {
    nombre: "Miguel",
    apellido: "Torres",
    imagen:
      "https://www.svgrepo.com/show/382095/female-avatar-girl-face-woman-user-4.svg",
    edad: 23,
  };

  return (
    <>
      {/* <Contador /> */}
      <UserContext.Provider value={user}>
        <Encabezado />
        <div>
          <h1>Perfil</h1>
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
