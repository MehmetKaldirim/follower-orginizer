import React from "react";
import followersBalta from "./followingsData";

export default function Following() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const initial = {
    href: "http://i.imgflip.com/1bij.jpg",
    value: "imineko",
    timeStampt: 1662341704,
  };
  const [meme, setMeme] = React.useState({
    href: "http://i.imgflip.com/1bij.jpg",
    value: "imineko",
    timeStampt: 1662341704,
  });
  const [allFollowers, setAllFollowers] = React.useState(followersBalta);

  const followersArray = allFollowers;
  //const arrsiz = followersArray[0].string_list_data;
  //const arli = [...arrsiz, initial];
  //console.log(followersBalta);
  console.log(allFollowers);

  //console.log(followersArray[0].string_list_data);
  return (
    <main>
      <h2>yazdaa göreyim</h2>
    </main>
  );
}
