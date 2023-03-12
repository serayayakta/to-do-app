import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/list/listSlice";

export default function ToDoListItem({ header, status }) {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(removeItem({ header: header }))}>
        Remove
      </button>
    </li>
  );
}
