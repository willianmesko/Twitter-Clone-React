import React from "react";
import { useSelector } from "react-redux";
import { Content } from "./styles";
import AvatarInput from "./AvatarInput";
import Follower from "../../assets/images/walter.jpg";
import Place from "../../assets/icons/place.svg";
import UrlProfile from "../../assets/icons/url.svg";
import Joined from "../../assets/icons/joined.svg";
import Born from "../../assets/icons/born.svg";
import Followers from "../../assets/icons/followers.svg";
import Images from "../../assets/icons/images.svg";

export default function Profile() {
  const { name, userName, bio, link, followers, medias } = useSelector(
    (state) => state.user
  );

  return (
    <Content>
      <AvatarInput />

      <h1>{name}</h1>
      <span>{userName}</span>
      <p>{bio}</p>
      <ul class="list">
        <li>
          <img src={Place} alt="Place" /> Porto Alegre - RS, Brazil
        </li>
        <li>
          <img src={UrlProfile} alt="URL" />
          <a target="_blank" href={link}>
            {link}
          </a>
        </li>
        <li>
          <img src={Joined} alt="Joined" /> Joined June 2007
        </li>
        <li>
          <img src={Born} alt="Born" /> Born the 20th of october 1994
        </li>
      </ul>

      <div class="followers">
        <strong>
          <img src={Followers} alt="Followers" /> {followers} followers that you
          know
        </strong>

        <ul>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
          <li>
            <img src={Follower} />
          </li>
        </ul>
      </div>

      <div class="images">
        <strong>
          <img src={Images} alt="Images" /> 266 Photos and videos
        </strong>
        <ul>
          {medias &&
            medias.map((media) => (
              <li key={media.id}>
                <img src={media.image} />{" "}
              </li>
            ))}
        </ul>
      </div>
    </Content>
  );
}
