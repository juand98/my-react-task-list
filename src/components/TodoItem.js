import React from "react";

{
  /* Recordemos que este componente tiene dos propiedades previamente definidas como atributo, la estamos pasando como un {} */
}

export default function TodoItem({ todo }) {
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

  return <div style={getStyle()}>{todo.task}</div>;
}
