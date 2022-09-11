import React from "react";
import followersData from "../followersData";
import followingsData from "../followingsData";
import classes from "./Follower.module.css";

export default function Followers() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [allFollowers, setAllFollowers] = React.useState(followersData);

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

  console.log("here is followers list");
  console.log(valueFollowersList);

  console.log("here is followings list");
  console.log(valueFollowingsList);

  console.log("here is followings but not followers");
  console.log(followingButNotFollowers);

  return <main></main>;
}
