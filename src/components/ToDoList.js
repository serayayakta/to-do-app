import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../features/list/listSlice";
import ToDoListItem from "./ToDoListItem";

export default function ToDoList() {
  const items = useSelector((state) => state.list);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addItem({
        header: value,
        status: "to do",
      })
    );
  };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {items.map((item) => (
          <ToDoListItem header={item.header} status={item.status} />
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <span>New To Do Item Header: </span>
        <input
          type="text"
          placeholder="Add new to do item..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
