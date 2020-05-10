import React from "react";
import { Container, Content, NewTweet } from "./styles";
import More from "../../assets/icons/more.svg";

export default function ActionBar() {
  return (
    <Container>
      <Content>
        <ul>
          <li class="active">
            <span>Tweets</span>
            <strong>3931</strong>
          </li>
          <li>
            <span>Following</span>
            <strong>645</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>84</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>98</strong>
          </li>
        </ul>
        <div class="actions">
          <img src={More} alt="More" />
        </div>
      </Content>
      <NewTweet>
        <textarea placeholder="O que está acontecendo?"></textarea>
        <button>Tweetar</button>
      </NewTweet>
    </Container>
  );
}
