import { useState } from "react";
import data from "./data.json";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  //Usaremos el hook "useState", que nos permitirá inicializar y cambiar cierta información o estado relacionado al componente. Gracias a la extensión automáticamente este se importa en nuestro archivo. Recordemos que en los corchetess, como primer parámetro asignamos un nombre a la información con la cual vamos a trabajar, en este caso todos (tareas, english). Como segundo parámetro usamos el set para poder cambiar o actulizar la lista de tareas.
  const [todos, setTodos] = useState(data);
  // Por defecto esta lista tendrá unos valores, previamente creados en "data.json", un arreglo de objetos predeterminados para la lista de tareas. Debemos importarlo en nuestro código para ser usado posteriormente.

  const onComplete = (id) => {
    console.log("Task", id);
  };

  return (
    <div className="container">
      <TodoList todos={todos} onComplete={onComplete} />
    </div>
  );
}

export default App;
