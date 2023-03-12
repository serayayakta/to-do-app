import React from "react";

export default function ToDoItem({ id, header, completed }) {
  return (
    <li>
      <span>
        <input type="checkbox" checked={completed}></input>
        {header}
      </span>
      <button>Remove</button>
    </li>
  );
}
