import React, { useState } from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { db } from "../../firebase";
import { Container, Content, NewTweets } from "./styles";
import More from "../../assets/icons/more.svg";

export default function ActionBar() {
  const [tweet, setTweet] = useState("");

  const { followers, following, favorites, tweetsCount } = useSelector(
    (state) => state.user
  );

  const handleTweet = (e) => {
    e.preventDefault();
    if (tweet.length > 0) {
      let ref = uuid();
      db.collection("tweets")
        .doc(ref)
        .set({
          id: ref,
          text: tweet,
          likes: 0,
          comments: 0,
          replies: 0,
          created: Date.now(),
        })

        .then(setTweet(""));
    }
  };

  return (
    <Container>
      <Content>
        <ul>
          <li className="active">
            <span>Tweets</span>
            <strong>{tweetsCount}</strong>
          </li>
          <li>
            <span>Following</span>
            <strong>{following}</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>{followers}</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>{favorites}</strong>
          </li>
        </ul>
        <div className="actions">
          <img src={More} alt="More" />
        </div>
      </Content>
      <NewTweets>
        <form onSubmit={handleTweet}>
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What is happening?"
          />
          <button>Tweet</button>
        </form>
      </NewTweets>
    </Container>
  );
}
