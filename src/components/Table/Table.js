import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";
import followersData from "../../followersData";
import followingsData from "../../followingsData";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const Table = () => {
  //const [counts, setCounts] = useState({ a: 15, b: 0, c: 0 });

  const { followers: followers } = followersData;
  const { followings: followings } = followingsData;
  const newFollower = [];
  const newFollowing = [];
  const difBetween = [];
  const followerValue = [];

  const followingButNotFollowers = [];

  for (let i = 1; i < followers.length; i++) {
    const dummyFollower = followers[i].string_list_data[0];
    const value = followers[i].string_list_data[0].value;
    followerValue.push(value);
    const follower = { ...dummyFollower, id: i };
    newFollower.push(follower);
  }

  for (let i = 1; i < followings.length; i++) {
    const dummyFollowing = followings[i].string_list_data[0];
    const value = followings[i].string_list_data[0].value;

    if (!followerValue.includes(value)) {
      difBetween.push(dummyFollowing);
    }
    const following = { ...newFollowing, id: i };
    newFollowing.push(following);
  }

  for (let i = 1; i < difBetween.length; i++) {
    const dummyFollowing = difBetween[i];
    const following = { ...dummyFollowing, id: i };
    followingButNotFollowers.push(following);
  }

  //setNotFollowers(followingButNotFollowers);
  const [notFollowers, setNotFollowers] = useState(followingButNotFollowers);
  const [addFormData, setAddFormData] = useState({
    href: "",
    value: "",
    timestamp: 0,
  });
  const [editFollowerId, setEditFollowerId] = useState(null);

  const addFormHandler = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const newFollower = {
      //id: nanoid(),
      href: addFormData.href,
      value: addFormData.value,
      timestamp: addFormData.timestamp,
    };

    const newFollowers = [...notFollowers, newFollower];
    setNotFollowers(newFollowers);

    /*console.log("here new follower list");
    console.log(newFollower);

    console.log("here new following list");
    console.log(newFollowing);

    console.log("here new diference");
    console.log(followingButNotFollowers);*/
  };

  return (
    <div className="app-container">
      <form>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>href</th>
              <th>value</th>
              <th>timestamp</th>
            </tr>
          </thead>
          <tbody>
            {notFollowers.map((follower) => (
              <Fragment>
                {editFollowerId === follower.id ? (
                  <EditableRow />
                ) : (
                  <ReadOnlyRow follower={follower} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a follower</h2>
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
      </form>
    </div>
  );
};

export default Table;
