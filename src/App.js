import { useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  //Usaremos el hook "useState", que nos permitirá inicializar y cambiar cierta información o estado relacionado al componente. Gracias a la extensión automáticamente este se importa en nuestro archivo. Recordemos que en los corchetess, como primer parámetro asignamos un nombre a la información con la cual vamos a trabajar, en este caso todos (tareas, english). Como segundo parámetro usamos el set para poder cambiar o actulizar la lista de tareas.
  const [todos, setTodos] = useState(data);

  console.log(todos);
  return (
    <div className="container">
      <h2>Hola</h2>
    </div>
  );
}

export default App;
