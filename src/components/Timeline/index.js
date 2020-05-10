import React from "react";
import { Container, Tweets, Tweet } from "./styles";
import { useSelector } from "react-redux";
import Comments from "../../assets/icons/comments.svg";
import Retweets from "../../assets/icons/retweet.svg";
import Likes from "../../assets/icons/like.svg";

export default function Timeline() {
  const { name, avatar, tweets } = useSelector((state) => state.user);
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
          tweets.map((tweet) => (
            <Tweet>
              <img src={avatar} alt="Avatar" />
              <div class="info">
                <strong>
                  {name} <span>@Mesko</span>
                </strong>
                <p>{tweet.text}</p>
                <div class="actions">
                  <a href="">
                    <img src={Comments} alt="Comments" /> 3
                  </a>
                  <a href="">
                    <img src={Retweets} alt="Retweet" /> 4
                  </a>
                  <a href="">
                    <img src={Likes} alt="Likes" /> 6
                  </a>
                </div>
              </div>
            </Tweet>
          ))}
      </Tweets>
    </Container>
  );
}
