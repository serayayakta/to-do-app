import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const items = [
    { id: 1, header: "Grocery", done: false },
    { id: 2, header: "Reading", done: false },
    { id: 3, header: "Meditation", done: true },
    { id: 4, header: "Laundry", done: false },
  ];

  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <ToDoItem id={item.id} header={item.header} done={item.done} />
      ))}
    </ul>
  );
}
