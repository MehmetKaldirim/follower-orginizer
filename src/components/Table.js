import { useState } from "react";
import classes from "./Table.module.css";
import Followers from "./NotFollowers";
import Following from "./Following";
const Table = () => {
  //const [counts, setCounts] = useState({ a: 15, b: 0, c: 0 });
  const [NotFollowers, setNotFollowers] = useState(null);
  const { followers: followers } = followersData;
  const { followings: followings } = followingsData;
  const valueFollowersList = [];
  const valueFollowingsList = [];
  const followingButNotFollowers = [];

  for (let i = 1; i < followers.length; i++) {
    const { value: value } = followers[i].string_list_data[0];
    valueFollowersList.push(value);
  }

  for (let i = 1; i < followings.length; i++) {
    const { value: value } = followings[i].string_list_data[0];
    if (!valueFollowersList.includes(value)) {
      followingButNotFollowers.push(value);
    }

    valueFollowingsList.push(value);
  }

  setNotFollowers(followingButNotFollowers);
  return (
    <div className="app-container">
      <table className={classes.table}>
        <thead>
          <tr>
            <th>href</th>
            <th>value</th>
            <th>timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{counts.a}</td>
            <td>{counts.b}</td>
            <td>{counts.c}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
