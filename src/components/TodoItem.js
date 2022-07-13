import React from "react";

{
  /* Recordemos que este componente tiene dos propiedades previamente definidas como atributo, la estamos pasando como un {} */
}

export default function TodoItem({ todo, onComplete }) {
  {
    /* A cada tarea le daremos un estilo, para esto usamos el atributo style dentro de la etiqueta div y dentro de este usamos la función "getStyle" que ejecutaremos para dar estilos  */
  }

  {
    /* Esta función nos retornará un objeto el cual va a contener el estilo para cada una de las tareas. La propiedad "TextDecoration" va a variar en base a que una tarea esté completada y otra  no, así que usaremos condicionales para expresar esto */
  }

  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px solid #ffffff",
      backgroundColor: "#CCF7E3",
    };
  };

  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      {todo.task}
      <button className="add-btn">X</button>
    </div>
  );
}

{
  /* El atributo checked de la etiqueta input es un atributo booleano, cuando está presenta especifica que un input debe marcarse cuando se carga la pagina. En este caso, este atributo va a varia en funcion de la propiedad completed, es decir si el valor de la propiedad "completed" es verdad se marca el checkbox */
  /* Usamos tambien para la etiqueta input un evento, el evento onChange, el cual recibe una función. Esa función se va a encargar de enviar el numero de id de la tarea y de esa manera marcarlo como completado o no.  */
}
