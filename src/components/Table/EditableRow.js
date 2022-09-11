import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="href"
          required="required"
          placeholder="Enter href"
        />
      </td>
      <td>
        <input
          type="text"
          name="value"
          required="required"
          placeholder="Enter value"
        />
      </td>
      <td>
        <input
          type="text"
          name="timestamp"
          required="required"
          placeholder="Enter stamp"
        />
      </td>
    </tr>
  );
};

export default EditableRow;
