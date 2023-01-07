import followersData from "./followersData";
import followingsData from "./followingsData";

const { followers: followers } = followersData;
const { followings: followings } = followingsData;
const newFollower = [];
const newFollowing = [];
const difBetween = [];
const followerValue = [];
const notFolowerValue = [];

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
//difBetween.length
for (let i = 523; i <difBetween.length; i++) {
  const dummyFollowing = difBetween[i];
  const following = { ...dummyFollowing, id: i };
  followingButNotFollowers.push(following);
  notFolowerValue.push(following.value);
}

const allData = {
  followingButNotFollowers,
  notFolowerValue,
};

export default allData;


