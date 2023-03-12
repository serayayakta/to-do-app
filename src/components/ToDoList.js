import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const items = [
    { id: 1, header: "Grocery", status: "done" },
    { id: 2, header: "Reading", status: "in progress" },
    { id: 3, header: "Meditation", status: "to do" },
    { id: 4, header: "Laundry", status: "to do" },
  ];

  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <ToDoItem id={item.id} header={item.header} status={item.status} />
      ))}
    </ul>
  );
}
