import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { Container, Content, NewTweets } from "./styles";
import { NewTweet } from "../../store/modules/user/actions";
import More from "../../assets/icons/more.svg";

export default function ActionBar() {
  const [tweet, setTweet] = useState({
    id: "",
    text: "",
  });

  const { followers, following, favorites, tweets } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const tweetsCount = useMemo(() => tweets.length, [tweets]);

  const handleTweet = (e) => {
    e.preventDefault();
    if (tweet.text.length > 0) {
      dispatch(NewTweet(tweet));
      setTweet({ id: "", text: "" });
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
            value={tweet.text}
            onChange={(e) => setTweet({ id: uuid(), text: e.target.value })}
            placeholder="What is happening?"
          />
          <button>Tweet</button>
        </form>
      </NewTweets>
    </Container>
  );
}
