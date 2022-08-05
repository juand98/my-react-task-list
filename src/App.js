import { useState } from "react";
import data from "./data.json";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";

function App() {
  //Usaremos el hook "useState", que nos permitirá inicializar y cambiar cierta información o estado relacionado al componente. Gracias a la extensión automáticamente este se importa en nuestro archivo. Recordemos que en los corchetess, como primer parámetro asignamos un nombre a la información con la cual vamos a trabajar, en este caso todos (tareas, english). Como segundo parámetro usamos el set para poder cambiar o actulizar la lista de tareas.
  const [todos, setTodos] = useState(data);
  // Por defecto esta lista tendrá unos valores, previamente creados en "data.json", un arreglo de objetos predeterminados para la lista de tareas. Debemos importarlo en nuestro código para ser usado posteriormente.

  const onComplete = (id) => {
    console.log("Task", id);
    setTodos(
      todos.map((tarea) => {
        return tarea.id === Number(id)
          ? { ...tarea, completed: !tarea.completed }
          : { ...tarea };
        {
          /* CORRECCIÓN (NO ES {...tarea, completed: true}): la actualización de la propiedad completed de cada tarea no puede ser "true" por que nosotros debemos cambiarle el valor siempre al valor opuesto del valor original de la propiedad, es decir, si es true, cambiar a false y viceversa. Se hace a través de la sintaxis descrita arriba (!tarea.completed: si el valor actual de la tarea es verdad, debemos actualizarlo por false y si el valor es false, debemos  actualizarlo por lo opuesto). */
        }
      })
    );

    /* todos.map((tarea) => {
      return tarea.id === Number(id)
        ? { ...tarea, completed: true }
        : { ...tarea };
    }); */
  };

  {
    /* Como parámetro de la función usamos el parámetro general "id" que hace referencia a cada id de cada tarea. Recordemos que en el componente "TodoItem.js" estamos enviando el id de la tarea. Notemos que al presionar cada tarea que está predeterminanda, en consola veremos el nombre de la tarea y el id correspondiente de cada tarea. Notemos que en este momento al clickear sobre el checkbox, la flecha de marcado no completa el recuadro para ello harémos una iteración sobre cada elemento de la lista y analizaremos el id que estamos recibiendo en esta función. Esta iteracion recibirá la siguiente instrucción: revisará el id de cada tarea que se encuentra en el "State" es igual al id que estamos recibiendo (Number() nos ayuda a verificar que estamos trabajando con un número entero). Si el "id" que estamos recibiendo es igual a algún id de las tareas que tenemos en el "state" crearemos un objeto 
    
    Si el "id" que estamos recibiendo es igual a algún id de las tareas que tenemos en el "state" crearemos un objeto. Si es igual creamos una copia del objeto original y actualizamos la propiedad "completed" a true.

    Si el "id" que recibimos no es igual a algún id de las tareas que tenemos en el state. Solo vamos a pasar una copia del objeto original.

    Resumen onComplete: estamos analizando el "id" que viene desde el componente hijo y estamos diciendo que si ese "id" es igual al "id" de alguna de las tareas que se encuentran en el "state": si es igual creamos un nuevo objeto creando una nueva copia de la tarea actual (...todo) y actualizaremos a la propiedad "completed" por "true". De otro modo simplemente creamos una copia de la tarea actual. SI LA TAREA YA ESTÁ EN EL "STATE", SI YA ES AGREGADA PREVIAMENTE ENTONCES ESTA GENERA UN ID, AL ESTAR AGREGADO SE VERIFICA AL MOMENTO DE CLICKEAR SOBRE LA TAREA QUE EL ID SEA UN ENTERO Y QUE EL ID QUE GENERA SEA IGUAL AL DE LA TAREA DENTRO DEL "STATE" PARA ASÍ VALIDAR QUE LA TAREA YA EXISTE Y FUE COMPLETADA CON EL EVENTO DEL CLICK. 

    Finalmente sabemos que .map nos retorna un nuevo arreglo y por simplicidad almacenamos todo en una variable. Usamos setTodos que es prácticamente lo mismo.
    
    */
  }

  const onDeleteItem = (id) => {
    console.log("Delete", id);
    setTodos([...todos].filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="container">
      <TodoHeader />
      <h1>TASK LIST</h1>
      <TodoForm />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

{
  /* Asignamos como prop "onComplete" que es la función que nos ayudará a enviar el id de cada tarea y lo declaramos en este mismo archivo */
}
{
  /* Asignamos como prop "onDeleteItem" que es la función que nos ayudará a enviar el id de cada tarea y lo declaramos en este mismo archivo
  
  función onDeleteItem.
  En primer lugar crearemos una copia de la lista todo que tenemos, luego lo filtramos utilizando .filter
  La instrucción en el método será que si el "id" de las tareas que ya tenemos en el "state" es diferente al "id" que le estamos recibiendo no lo tendremos en cuenta y ede esa manera actualizar la lista de tareas. Resumen: estamos iterando a la lista de todos que está en el "state" que tenemos y estamos diciendo que si algunos de las tareas tiene el "id" diferente al "id" que estamos recibiendo utilizaremos esta tarea y la tarea que tenga el "id" que estamos recibiendo lo dejaremos afuera, lo eliminaremos. 
  Para actualizar el "state" usamos setTodos
  
  */
}

{
  /* Agregar tarea a la lista:

  Para esto crearemos un nuevo componente 


*/
}

export default App;
