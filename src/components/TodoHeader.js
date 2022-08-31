import React from "react";

function TodoHeader() {
  const getStyleHeader = () => {
    return {
      color: "#fff",
      margin: "auto 10px",
      textAlign: "center",
    };
  };
  return (
    <div>
      <h1 style={getStyleHeader()}>Task List</h1>
    </div>
  );
}

export default TodoHeader;
