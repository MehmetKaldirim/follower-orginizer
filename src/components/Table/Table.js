import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";
import allData from "../Data/dataOrginizator";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Table = () => {
  //setNotFollowers(followingButNotFollowers);
  const followingButNotFollowers = allData.followingButNotFollowers;
  const notFolowerValue = allData.notFolowerValue;
  const [notFollowers, setNotFollowers] = useState(followingButNotFollowers);

  const [addFormData, setAddFormData] = useState({
    href: "",
    value: "",
    timestamp: "",
  });

  const [editFormData, setEditFormData] = useState({
    href: "",
    value: "",
    timestamp: "",
  });

  const [editFollowerId, setEditFollowerId] = useState(null);
  const [isIncluded, setIsIncluded] = useState(false);
  const [followerId, setFollowerId] = useState(null);

  const addFormHandler = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const editFormHandler = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const newFollower = {
      id: nanoid(),
      href: addFormData.href,
      value: addFormData.value,
      timestamp: addFormData.timestamp,
    };

    const newFollowers = [...notFollowers, newFollower];
    setNotFollowers(newFollowers);
  };

  const submitEditFormHandler = (event) => {
    event.preventDefault();

    const editedFollower = {
      id: editFollowerId,
      href: editFormData.href,
      value: editFormData.value,
      timestamp: editFormData.timestamp,
    };

    const newFollowers = [...notFollowers];
    const index = notFollowers.findIndex(
      (follower) => follower.id === editFollowerId
    );
    newFollowers[index] = editedFollower;
    setNotFollowers(newFollowers);
    setEditFollowerId(null);
  };

  const editClickHandler = (event, follower) => {
    event.preventDefault();
    setEditFollowerId(follower.id);

    const formValues = {
      href: follower.href,
      value: follower.value,
      timestamp: follower.timestamp,
    };

    setEditFormData(formValues);
  };

  const cancelClickHandler = () => {
    setEditFollowerId(null);
  };

  const deleteClickHandler = (followerId) => {
    const newFollowers = [...notFollowers];

    const index = notFollowers.findIndex(
      (follower) => follower.id === followerId
    );

    newFollowers.splice(index, 1);

    setNotFollowers(newFollowers);
  };

  const onClickSearchHandler = (event) => {
    event.preventDefault();
    const newFollower = {
      id: nanoid(),
      href: addFormData.href,
      value: addFormData.value,
      timestamp: addFormData.timestamp,
    };
    console.log(newFollower.value);
    if (notFolowerValue.includes(newFollower.value)) {
      const index = notFollowers.findIndex(
        (follower) => follower.value === newFollower.value
      );
      const id = notFollowers[index].id;
      setFollowerId(id);
      setIsIncluded(true);
    }

    console.log("is included bence = " + isIncluded);
  };
  /*console.log("here new follower list");
    console.log(newFollower);

    console.log("here new following list");
    console.log(newFollowing);

    console.log("here new diference");
    console.log(followingButNotFollowers);*/
  return (
    <div>
      <form onSubmit={submitEditFormHandler}>
        <table className={classes.table}>
          <div className={classes.header}>
            <tr>
              <th className={classes.th1}>Id</th>
              <th className={classes.th2}>Href</th>
              <th className={classes.th3}>Value</th>
              <th className={classes.th4}>Timestamp</th>
              <th className={classes.th4}>Actions</th>
            </tr>
          </div>

          <tbody>
            {notFollowers.map((follower) => (
              <Fragment>
                {editFollowerId === follower.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    editFormHandler={editFormHandler}
                    cancelClickHandler={cancelClickHandler}
                  />
                ) : (
                  <ReadOnlyRow
                    follower={follower}
                    editClickHandler={editClickHandler}
                    deleteClickHandler={deleteClickHandler}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Search a follower</h2>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <input
          type="text"
          name="href"
          required="required"
          placeholder="Enter href"
          onChange={addFormHandler}
        />
        <input
          type="text"
          name="value"
          required="required"
          placeholder="Enter value"
          onChange={addFormHandler}
        />
        <input
          type="text"
          name="timestamp"
          required="required"
          placeholder="Enter stamp"
          onChange={addFormHandler}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onClickSearchHandler}>
          Search
        </button>
        {isIncluded && <button type="button">{followerId}</button>}
      </form>
    </div>
  );
};

export default Table;
