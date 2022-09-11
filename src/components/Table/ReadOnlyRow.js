import react from "react";

const ReadOnlyRow = ({ follower, editClickHandler }) => {
  const onClickHandler = (event) => {
    editClickHandler(event, follower);
  };
  return (
    <div>
      <tr>
        <td>{follower.href}</td>
        <td>{follower.value}</td>
        <td>{follower.timestamp}</td>
        <td>
          <button type="button" onClick={onClickHandler}>
            Edit
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
