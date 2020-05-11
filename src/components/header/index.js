import React from "react";
import { Container, Content, Side } from "./styles";
import Home from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Messages from "../../assets/icons/message.svg";
import Logo from "../../assets/icons/logo.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const { avatar } = useSelector((state) => state.user);
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <img src={Home} alt="Home" /> Home
            </li>
            <li>
              <img src={Notification} alt="Home" /> Notifications
            </li>
            <li>
              <img src={Messages} alt="Home" /> Messages
            </li>
          </ul>
        </nav>
        <img src={Logo} alt="Logo Twitter" />
        <Side>
          <input type="text" placeholder="Search on Twitter" />
          <img src={avatar} alt="avatar" />
        </Side>
      </Content>
    </Container>
  );
}
