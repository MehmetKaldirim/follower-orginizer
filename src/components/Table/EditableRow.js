import React from "react";

const EditableRow = ({ editFormData, editFormHandler, cancelClickHandler }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter href..."
          name="href"
          value={editFormData.href}
          onChange={editFormHandler}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter value"
          name="value"
          value={editFormData.value}
          onChange={editFormHandler}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter stamp"
          name="timestamp"
          value={editFormData.timestamp}
          onChange={editFormHandler}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={cancelClickHandler}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
