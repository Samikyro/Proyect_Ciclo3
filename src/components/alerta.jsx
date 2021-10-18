function Football() {
    const shoot = () => {
      alert("Se Guardo correctamente!");
    }
  
    return (
      <button onClick={shoot} className="bGuardarV">Guardar</button>
    );
  }
  
export default Football;

