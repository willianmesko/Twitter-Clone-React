import React from "react";
import { Container } from "./styles";
import AvatarImg from "../../assets/images/avatar.png";

export default function Suggestion() {
  return (
    <Container>
      <div class="widget follow">
        <div class="title">
          <strong>Who to follow</strong>
          <a href="">Refresh</a>
          <a href="">View all</a>
        </div>

        <ul>
          <li>
            <div class="profile">
              <img src={AvatarImg} alt="Avatar" />
              <div class="info">
                <strong>
                  Spade <span>@spade.be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div class="profile">
              <img src={AvatarImg} alt="Avatar" />
              <div class="info">
                <strong>
                  Spade <span>@spade.be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
          <li>
            <div class="profile">
              <img src={AvatarImg} alt="Avatar" />
              <div class="info">
                <strong>
                  Spade <span>@spade.be</span>
                </strong>
                <button>Follow</button>
              </div>
            </div>
            <a href="">x</a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
