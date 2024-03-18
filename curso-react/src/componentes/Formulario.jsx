
const Formulario = (props) => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>Nombre</label>
      <input
        value={props.nombre}
        onChange={props.cambiarNombre}
        defaultValue={"Marcelo"}
        type="text"
        placeholder="Escriba su nombre..."
      />
      <label>Email</label>
      <input value={props.email} onChange={props.cambiarEmail} placeholder="Escriba su email..." />
    </form>
  );
};

export default Formulario;
