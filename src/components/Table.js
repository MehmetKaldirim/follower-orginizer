import { useState } from "react";
import { nanoid } from "nanoid";
import classes from "./Table.module.css";
import followersData from "../followersData";
import followingsData from "../followingsData";

const Table = () => {
  //const [counts, setCounts] = useState({ a: 15, b: 0, c: 0 });

  const { followers: followers } = followersData;
  const { followings: followings } = followingsData;
  const valueFollowersList = [];
  const valueFollowingsList = [];
  const followingButNotFollowers = [];

  for (let i = 1; i < followers.length; i++) {
    const a = followers[i].string_list_data[0];
    valueFollowersList.push(a);
  }

  for (let i = 1; i < 5; i++) {
    const b = followings[i].string_list_data[0];
    if (!valueFollowersList.includes(b)) {
      followingButNotFollowers.push(b);
    }

    valueFollowingsList.push(b);
  }

  //setNotFollowers(followingButNotFollowers);
  const [notFollowers, setNotFollowers] = useState(followingButNotFollowers);
  const [addFormData, setAddFormData] = useState({
    href: "",
    value: "",
    timestamp: 0,
  });

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
  };

  return (
    <div className="app-container">
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
            <tr>
              <td>{follower.href}</td>
              <td>{follower.value}</td>
              <td>{follower.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
