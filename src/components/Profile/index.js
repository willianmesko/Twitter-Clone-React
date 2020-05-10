import React from "react";
import { useSelector } from "react-redux";
import { Content } from "./styles";
import AvatarInput from "./AvatarInput";

import Place from "../../assets/icons/place.svg";
import UrlProfile from "../../assets/icons/url.svg";
import Joined from "../../assets/icons/joined.svg";
import Born from "../../assets/icons/born.svg";
import Followers from "../../assets/icons/followers.svg";
import Images from "../../assets/icons/images.svg";

export default function Profile() {
  const { name, userName, bio } = useSelector((state) => state.user);
  return (
    <Content>
      <AvatarInput />
      <h1>{name}</h1>
      <span>{userName}</span>
      <p>{bio}</p>
      <ul class="list">
        <li>
          <img src={Place} alt="Place" /> Namur, Belgium
        </li>
        <li>
          <img src={UrlProfile} alt="URL" /> exibit.be
        </li>
        <li>
          <img src={Joined} alt="Joined" /> Joined June 2007
        </li>
        <li>
          <img src={Born} alt="Born" /> Born the 20th of June 1978
        </li>
      </ul>

      <div class="followers">
        <strong>
          <img src={Followers} alt="Followers" /> 73 followers that you know
        </strong>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="widget images">
        <strong>
          <img src={Images} alt="Images" /> 266 Photos and videos
        </strong>

        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Content>
  );
}
