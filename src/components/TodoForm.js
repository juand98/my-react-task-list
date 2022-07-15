import React from "react";

export default function TodoForm() {
  return (
    <div style={{ margin: 20 }}>
      <form action="">
        <input type="text" value={""} />
        <button>Agregar tarea</button>
      </form>
    </div>
  );
}
