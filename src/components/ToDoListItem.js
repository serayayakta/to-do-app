import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateStatus } from "../features/list/listSlice";

export default function ToDoListItem({ header }) {
  const initialStatus = useSelector((state) =>
    state.list.find((item) => item.header === header)
  ).status;
  const dispatch = useDispatch();
  const [status, setStatus] = useState(initialStatus);
  const onChangeStatus = (event) => {
    event.preventDefault();

    setStatus(event.target.value);

    dispatch(
      updateStatus({
        header: header,
        status: status,
      })
    );
  };
  const onChangeCheckbox = (event) => {
    event.preventDefault();
    const currentStatus = event.target.checked;
    const newStatus = (checked) => {
      return checked ? "to do" : "done";
    };

    dispatch(
      updateStatus({
        header: header,
        status: newStatus(currentStatus),
      })
    );
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={status === "done"}
        onChange={(event) => onChangeCheckbox(event)}
      ></input>
      {header}
      <select
        name="status"
        id="status"
        value={status}
        onChange={(event) => onChangeStatus(event)}
      >
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
