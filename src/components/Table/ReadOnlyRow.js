import react from "react";
import classes from "./Read.module.css";

const ReadOnlyRow = ({ follower, editClickHandler, deleteClickHandler }) => {
  const onClickEditHandler = (event) => {
    editClickHandler(event, follower);
  };
  const onClickDeleteHandler = () => {
    deleteClickHandler(follower.id);
  };
  return (
    <div className={classes.read}>
      <tr>
        <td style={{ color: "red", "font-size": 32 }}>{follower.id}</td>
        <td
          style={{ "background-color": "green", color: "red", "font-size": 32 }}
        >
          {follower.href}
        </td>
        <td>{follower.value}</td>
        <td>{follower.timestamp}</td>
        <td>
          <button type="button" onClick={onClickEditHandler}>
            Edit
          </button>
          <button type="button" onClick={onClickDeleteHandler}>
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
