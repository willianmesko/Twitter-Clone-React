import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";
import { db } from "../../firebase";
import { Container, Content, NewTweets } from "./styles";
import More from "../../assets/icons/more.svg";
import { newTweet } from "../../store/modules/user/actions";
export default function ActionBar() {
  const dispatch = useDispatch();

  const [tweet, setTweet] = useState("");
  const { followers, following, favorites, tweets } = useSelector(
    (state) => state.user
  );

  const tweetsCount = useMemo(() => tweets.length, [tweets]);

  const handleTweet = (e) => {
    e.preventDefault();
    if (tweet.length > 0) {
      let ref = uuid();

      let newtweet = {
        id: ref,
        text: tweet,
        likes: 0,
        comments: 0,
        replies: 0,
        created: Date.now(),
      };
      dispatch(newTweet(newtweet));
      db.collection("tweets").doc(ref).set(newtweet).then(setTweet(""));
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
