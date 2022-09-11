import react from "react";

const ReadOnlyRow = ({ follower }) => {
  return (
    <div>
      <tr>
        <td>{follower.href}</td>
        <td>{follower.value}</td>
        <td>{follower.timestamp}</td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
