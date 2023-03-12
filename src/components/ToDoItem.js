import React from "react";

export default function ToDoItem({ id, header, status }) {
  return (
    <li>
      <input type="checkbox" checked={status === "done"}></input>
      {header}
      <select name="status" id="status">
        <option value="in progress" selected={status === "in progress"}>
          in progress
        </option>
        <option value="done" selected={status === "done"}>
          done
        </option>
        <option value="to do" selected={status === "to do"}>
          to do
        </option>
      </select>
      <button>Remove</button>
    </li>
  );
}
