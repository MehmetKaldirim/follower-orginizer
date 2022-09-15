import react from "react";

const ReadOnlyRow = ({ follower, editClickHandler, deleteClickHandler }) => {
  const onClickEditHandler = (event) => {
    editClickHandler(event, follower);
  };
  const onClickDeleteHandler = () => {
    deleteClickHandler(follower.id);
  };
  return (
    <div>
      <tr>
        <td>{follower.id}</td>
        <td>{follower.href}</td>
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
