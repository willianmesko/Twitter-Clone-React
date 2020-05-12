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
      <div className="userInfo">
        <h1>{name}</h1>
        <span>@{userName}</span>
        <p>{bio}</p>
      </div>
      <ul className="list">
        <li>
          <img src={Place} alt="Place" /> Porto Alegre - RS, Brazil
        </li>
        <li>
          <img src={UrlProfile} alt="URL" />
          <a rel="noopener noreferrer" target="_blank" href={link}>
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

      <div className="followers">
        <strong>
          <img src={Followers} alt="Followers" /> {followers} followers that you
          know
        </strong>

        <ul>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
          <li>
            <img src={Follower} alt="followers" />
          </li>
        </ul>
      </div>

      <div className="images">
        <strong>
          <img src={Images} alt="Images" /> 266 Photos and videos
        </strong>
        <ul>
          {medias &&
            medias.map((media) => (
              <li key={media.id}>
                <img src={media.image} alt={media.image} />
              </li>
            ))}
        </ul>
      </div>
    </Content>
  );
}
