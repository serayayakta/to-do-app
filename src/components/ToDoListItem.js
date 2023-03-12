import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateStatus } from "../features/list/listSlice";

export default function ToDoListItem({ header }) {
  const initialStatus = useSelector((state) =>
    state.list.find((item) => item.header === header)
  ).status;
  const dispatch = useDispatch();
  const [status, setStatus] = useState(initialStatus);
  const [checkbox, setCheckbox] = useState(initialStatus === "done");
  const onChangeStatus = (event) => {
    const newStatus = event.target.value;

    setStatus(newStatus);
    setCheckbox(newStatus === "done" ? true : false);

    dispatch(
      updateStatus({
        header: header,
        status: newStatus,
      })
    );
  };
  const onChangeCheckbox = (event) => {
    const newStatus = event.target.checked ? "done" : "to do";

    setStatus(newStatus);
    setCheckbox(newStatus === "done" ? true : false);

    dispatch(
      updateStatus({
        header: header,
        status: newStatus,
      })
    );
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={(event) => onChangeCheckbox(event)}
      ></input>
      {header}
      <select onChange={(event) => onChangeStatus(event)}>
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
