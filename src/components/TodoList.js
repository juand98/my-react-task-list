import React from "react";
import TodoItem from "./TodoItem";

// Los valores por defecto están almacenados en el arreglo de objetos data.json

export default function TodoList({ todos, onComplete }) {
  return (
    <div>
      {/*A este componente "TodoList.js" le crearemos un componente hijo, este componente hara referencia a los items de la lista. En ese pasaremos la lista y la información de cada objeto como tal. Usamos dos propiedades para este nuevo componente, las propiedade: "todo" que hace referencia a la cantidad de elementos predeterminados de nuestra lista y la propiedad "key" para poder diferenciar cada uno de los elementos  */}
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={`todo-${index}`} onComplete={onComplete} />
      ))}
      {/* Cada elemento de la lista de tareas "todos" lo señalaremos con el parámetro general "todo", el segundo parámetro hace referecia al indice del elemento. Esta iteración tendrá valor para el componente hijo que estamos creando */}
    </div>
  );
}

{
  /* El atributo onComplete fue asignado al componente hijo como propiedad y esta es la función que nos ayudará a enviar el id de cada tarea de la lista, en App.js creamos esta función, debemos poner como parámetro en este archivo también la función agregada como propiedad en el elemento padre para acceder a ella. */
}
