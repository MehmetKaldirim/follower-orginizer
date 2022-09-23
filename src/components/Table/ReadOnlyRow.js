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
        <td className={classes.row1}>{follower.id}</td>
        <td className={classes.row2}>{follower.href}</td>
        <td className={classes.row3}>{follower.value}</td>
        <td className={classes.row4}>{follower.timestamp}</td>
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
