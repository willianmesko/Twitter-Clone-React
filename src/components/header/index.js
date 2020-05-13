import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { Container, Content, Side } from "./styles";
import Home from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Messages from "../../assets/icons/message.svg";
import Logo from "../../assets/icons/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { changeAvatar, changeCover } from "../../store/modules/user/actions";

export default function Header() {
  const { avatar } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const perfilImages = db.collection("perfil").doc("images");
    perfilImages.get().then((images) => {
      const { avatar, cover } = images.data();
      dispatch(changeAvatar(avatar));
      dispatch(changeCover(cover));
    });
  }, [dispatch]);
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={Home} alt="Home" /> Home
              </Link>
            </li>
            <li>
              <img src={Notification} alt="Home" /> Notifications
            </li>
            <li>
              <img src={Messages} alt="Home" /> Messages
            </li>
          </ul>
        </nav>
        <Link to="/">
          <img src={Logo} alt="Logo Twitter" />
        </Link>
        <Side>
          <input type="text" placeholder="Search on Twitter" />
          <Link to="/profile">
            <img src={avatar} alt="avatar" />
          </Link>
        </Side>
      </Content>
    </Container>
  );
}
