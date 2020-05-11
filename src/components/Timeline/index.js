import React, { useState } from "react";
import { Container, Tweets, Tweet } from "./styles";
import { useSelector } from "react-redux";
import Comments from "../../assets/icons/comments.svg";
import Retweets from "../../assets/icons/retweet.svg";
import Likes from "../../assets/icons/like.svg";

export default function Timeline() {
  const { name, avatar, tweets } = useSelector((state) => state.user);
  const [visible, setVisible] = useState(3);
  return (
    <Container>
      <nav>
        <a href="" class="active">
          Tweets
        </a>
        <a href="">Tweets and Replies</a>
        <a href="">Medias</a>
      </nav>
      <Tweets>
        {tweets &&
          tweets.slice(0, visible).map((tweet) => (
            <Tweet>
              <img src={avatar} alt="Avatar" />
              <div class="info">
                <strong>
                  {name} <span>@Mesko</span>
                </strong>
                <p>{tweet.text}</p>
                <div class="actions">
                  <a href="">
                    <img src={Comments} alt="Comments" />
                    {tweet.comments}
                  </a>
                  <a href="">
                    <img src={Retweets} alt="Retweet" /> {tweet.retweets}
                  </a>
                  <a href="">
                    <img src={Likes} alt="Likes" /> {tweet.likes}
                  </a>
                </div>
              </div>
            </Tweet>
          ))}
      </Tweets>
      {visible < tweets.length && (
        <button onClick={() => setVisible(visible + 5)}>Loading More</button>
      )}
    </Container>
  );
}
